# Aggiornamento portfolio - mobile, layout immagini, about

## Analisi requisiti
- Ottimizzare layout mobile dell'intero sito (tipografia, spaziatura, componenti chiave) con validazione Playwright.
- Aggiornare `SingleWork` per mostrare immagini allineate ma con posizionamento casuale interessante, rimuovendo effetti inclinati.
- Associare immagini corrette a ciascun lavoro, includendo Diagnostic Biochips.
- Aggiornare navigazione: rimuovere "blog", aggiungere link GitHub esterno e nuova pagina About.
- Eliminare animazioni nella hero.
- Progettare e implementare nuova pagina About ispirata al design di marinopanariello.com/about, garantendo massima qualità UI/UX.

## Rischi
- Gestione randomizzazione immagini senza compromettere accessibilità e performance.
- Disponibilità asset immagini adeguati; potrebbe servire reperimento o creazione.
- Coerenza design About con brand esistente senza introdurre regressioni responsive.
- Rimozione animazioni potrebbe richiedere refactor di componenti esistenti (HeroDoodles) condivisi altrove.
- Test Playwright mobile potrebbe necessitare aggiornamenti se selettori cambiano.

## Ipotesi
- Tutte le immagini necessarie sono già disponibili in `public/images/projects` o fornibili via design placeholders.
- Il nuovo design About può essere costruito con Tailwind CSS seguendo stile attuale.
- Navbar attuale può ospitare link esterno senza ulteriori logiche.
- Non sono richieste modifiche alla sezione blog oltre alla rimozione dal menu (contenuti possono restare raggiungibili via URL diretto).

## Criteri di accettazione
- Layout mobile privo di overflow, tipografia leggibile (<span class="text-sm"/h3 ridimensionati) verificata via Playwright su viewport mobile.
- `SingleWork` mostra immagini allineate verticalmente e casualmente distribuite orizzontalmente con stato consistente tra render e con lightbox funzionante.
- Ogni lavoro in `app/works/page.tsx` riporta almeno due immagini rappresentative; Diagnostic Biochips utilizza screenshot reale.
- Navbar mostra voci `home`, `works`, `about`, `github` (quest’ultima apre nuova scheda) senza voce Blog.
- Hero non utilizza animazioni (nessuna dipendenza da framer-motion per Hero e decorazioni).
- Pagina About nuova raggiungibile da `/about`, responsive e coerente col brand.

## Cosa è stato fatto
- Analizzata struttura esistente e creato documento di lavoro.
- Ridisegnata hero con layout statico responsive, CTA e background senza animazioni.
- Aggiornate scale tipografiche in `app/global.css` per migliorare la leggibilità mobile.
- Ripensato `SingleWork` con layout deterministico di immagini allineate e griglia responsive.
- Inserite nuove immagini nei lavori (Diagnostic Biochips) e regolata pagina Works.
- Rivista navigazione con nuova voce About e link GitHub esterno.
- Progettata nuova pagina About con sezioni su principi, esperienza, collaborazioni e CTA finale.
- Aggiunto test Playwright per garantire layout mobile senza overflow.
- Aggiornata sitemap per includere le nuove sezioni chiave.
- Rimossa la cornice interna della hero per un look più pulito.
- Navbar ripristinata nello stile originale con voci aggiornate (About + GitHub) mantenendo link esterno.
- Riprojettata pagina About con sezioni aggiornate, highlight numerici e superfici adattive per dark mode.
- Ridimensionate e squadrate le immagini dei case study, aggiungendo tutti gli asset Diagnostic Biochips (labbox inclusi).

## Verifica
- `pnpm lint` non eseguito: pnpm richiede Node.js >=16.14 ma l'ambiente espone Node 14.21.3.
- `pnpm test:e2e` non eseguito per lo stesso motivo. Necessario aggiornare Node o usare runtime compatibile per confermare.
