# Analisi shift orizzontale al refresh (home)

## Osservazioni
- Il fenomeno si manifesta solo quando la pagina viene ricaricata mentre la hero è visibile.
- All'avvio i contenuti appaiono traslati verso sinistra, poi tornano rapidamente alla posizione corretta.
- Lo shift corrisponde alla larghezza approssimativa della scrollbar verticale nei browser che non usano scrollbar overlay.

## Analisi tecnica
- `app/layout.tsx` monta `main` con `px-6`; nessuna logica JS applica traduzioni globali.
- La hero utilizza framer-motion (`motion.div` con `initial x: 50/150`), ma agisce solo sul blocco titolo e non giustifica uno spostamento dell'intera pagina.
- Il layout include il font locale `Satoshi` (`app/fonts/satoshi.ts`) con `display: "swap"`. Al primo paint il browser usa un fallback (es. `Arial`); quando il font personalizzato termina il caricamento, cambiano le metriche tipografiche → la quantità di testo per riga aumenta e l'altezza totale della pagina supera l'altezza della viewport.
- L'apparizione improvvisa della scrollbar verticale riduce la larghezza utile del viewport di ~15–17 px: tutti i container centrati subiscono un shift percettibile verso sinistra.
- Il salto è più evidente quando si è in cima alla pagina perché l'utente osserva l'intero repaint senza scorrere.

## Verifiche suggerite
1. Attivare gli strumenti di performance → layout shift su DevTools e osservare il contributo del cambio font.
2. Forzare un caricamento lento dei font (`Simulate slow 3G`) per riprodurre l'effetto e confermare il timing rispetto al font.

## Mitigazioni possibili
- **Scroll gutter stabile**: impostare `scrollbar-gutter: stable;` (o `stable both-edges`) su `html` per riservare spazio alla scrollbar a prescindere dalla presenza. Fonte: [MDN scrollbar-gutter](https://developer.mozilla.org/docs/Web/CSS/scrollbar-gutter).
- **Metriche fallback**: usare `adjustFontFallback: true` (default Next.js) o definire manualmente `fallback`/`size-adjust` per allineare il fallback al font finale, riducendo il reflow. Fonte: [Next.js font optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts).
- **Font-display**: valutare `display: optional` se l'impatto visivo del fallback è accettabile e si vuole evitare l'iniezione del font in condizioni lente (riduce il reflow ma può lasciare il fallback visibile a lungo).

## Prossimi passi consigliati
1. Applicare `scrollbar-gutter: stable both-edges;` a `html`/`body`, verificare su device Windows.
2. Integrare animazioni orizzontali tramite `useAnimation` + `useEffect` per attivarle solo lato client, prevenendo shift di idratazione.
3. Testare con `pnpm lint` e Lighthouse per assicurarsi che non introduca regressioni.
4. Se necessario, ottimizzare ulteriormente le metriche del fallback font per minimizzare CLS.

## Cosa è stato fatto
- 2025-09-20 01:15: Analisi comportamento, individuata relazione con caricamento font e comparsa scrollbar, proposte mitigazioni.
- 2025-09-20 01:30: Applicato `scrollbar-gutter: stable both-edges;` e fallback font armonizzato (`system-ui`, `Segoe UI`, `sans-serif`) con `adjustFontFallback` esplicito.
- 2025-09-20 01:45: Aggiornata animazione hero (traslazione verticale) per evitare scatto laterale post-idratazione.
- 2025-09-20 02:05: Reintrodotta animazione orizzontale usando controlli di framer-motion (avvio client-side) e rispetto `prefers-reduced-motion`.
