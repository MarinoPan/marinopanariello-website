# Consigli per portfolio professionale

## Analisi requisiti
- Fornire valutazione mirata dello stato attuale del sito di Marino Panariello.
- Suggerire miglioramenti per elevare percezione professionale, credibilità e conversioni.
- Coprire aspetti UX/UI, contenuti, performance e strategia di posizionamento.

## Rischi
- Mancanza di contesto su obiettivi di business o target potrebbe rendere i suggerimenti meno precisi.
- Possibili limitazioni tecniche non documentate che ostacolano l'implementazione di alcune proposte.

## Ipotesi
- Il sito è basato su Next.js con Tailwind CSS e framer-motion (da struttura del progetto).
- L'obiettivo principale è attrarre clienti B2B per servizi di design engineering.
- Il budget consente interventi su contenuti, design e ottimizzazione tecnica.

## Criteri di accettazione
- Elenco strutturato di consigli con priorità e motivazioni.
- Collegamenti a fonti autorevoli (es. documentazione ufficiale) quando rilevanti.
- Distinzione tra quick wins e interventi strategici.
- Documento aggiornato con log delle attività svolte.

## Analisi del sito
- Stack basato su Next.js (app router) con Tailwind e framer-motion; struttura modulare già pronta per scaling.
- Hero e copy principali sono in inglese, mentre brand e target potrebbero includere mercato italiano.
- Case study ricchi di metriche ma con layout uniforme; mancano CTA esplicite e social proof.
- Navigazione minimale con link diretti, ma senza punti di conversione rapidi (es. contatto, agenda call).

## Suggerimenti (quick wins ~1-2 settimane)
1. Implementare una CTA primaria persistente (es. “Prenota una call”) in hero e navbar; ipotesi da validare con stakeholder perché basata su pratica di lead generation.
2. Completare i metadati Next.js con `twitter`, `openGraph.images` personalizzati e `alternates.canonical` per migliorare anteprime e SEO ([Next.js metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)).
3. Marcare immagini critiche (hero e prime card) con `priority` e dimensioni coerenti per ridurre LCP, seguendo le linee guida ufficiali di `next/image` ([Next.js images priority](https://nextjs.org/docs/app/building-your-application/optimizing/images#prioritize-important-images)).
4. Aggiungere skip link e verificare il contrasto colore soprattutto con il layer di noise, per rispettare WCAG 2.2 1.4.3/2.4.1 ([W3C WCAG contrast](https://www.w3.org/TR/WCAG22/#contrast-minimum), [W3C bypass blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html)).

## Suggerimenti (interventi strategici)
1. Redigere struttura case study “problema → processo → risultato” con sezioni espandibili, ipotesi da validare tramite interviste con prospect.
2. Introdurre sezione “Processo e tool” con timeline e asset scaricabili per rafforzare credibilità; da verificare disponibilità contenuti.
3. Localizzazione bilingue (IT/EN) con routing internazionale di Next.js per allinearsi ai mercati serviti ([Next.js internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)).
4. Pubblicare dati strutturati JSON-LD (tipo `Person` + `CreativeWork`) per arricchire i rich snippet e la discoverability ([Google Search structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)).
5. Integrare form contatti o booking accessibile con pattern WAI per aumentare conversioni, considerando i requisiti di accessibilità ([W3C forms tutorial](https://www.w3.org/WAI/tutorials/forms/)).

## Interventi implementati
- Metadata globali arricchiti con canonical, immagini OG/Twitter dinamiche e keywords coerenti con il posizionamento.
- Aggiornato `baseUrl` al dominio principale per unificare sitemap e metadata.
- Navigazione con link rapido al CV (PDF) e apertura in nuova scheda.
- Stack mobile dei case study sovrapposto con lightbox e `priority` sul primo elemento, allineato alla richiesta di UX mobile.
- Prima card in “Launched Projects” con `priority` per migliorare caricamento above-the-fold.
- Pulsante email della pagina About aggiornato (mailto corretto, contrasto in dark mode).

## Piano animazioni testi
1. **Mappatura** delle intestazioni e paragrafi chiave (Hero, Services, Work, About) per definire le priorità di motion.
2. **Preset condiviso** con framer-motion (`useReducedMotion` + offset iniziale) da centralizzare in una utility per garantire coerenza.
3. **Varianti coordinate** (es. `x` o `y` differenziati) per creare ritmo tra sezioni, mantenendo durate ≤0.6s e ritardi <0.2s.
4. **Fallback** per `prefers-reduced-motion` con transizioni immediate; testing con Lighthouse/Chrome DevTools per verificare CLS.
5. **QA** accessibile con Axe/Playwright per assicurare che focus e lettura screen reader non siano compromessi.

## Piano miglioramenti grafici e interazioni
1. **Hero**: layering con gradienti dinamici, CTA primaria/secondaria e micro-interazione al passaggio del cursore.
2. **Case study**: layout “storytelling” sticky con timeline e indicatori di avanzamento animati.
3. **Design tokens**: estensione palette (accenti caldi/freddi) e scala tipografica per ridurre dipendenza da opacità.
4. **Micro-interazioni**: hover animati su card, pulsanti e icone, sfruttando framer-motion spring per feedback tattile.
5. **Trust & social proof**: sezione testimonianze/partner con reveal sequenziale e highlight dei risultati.

## Fonti consultate
- Next.js Docs: metadata, images, internationalization.
- W3C WCAG 2.2 linee guida contrasto e bypass blocks.
- Google Search Central structured data.
- W3C WAI tutorials for forms.

## Cosa è stato fatto
- 2025-09-19 23:59: Creazione documento e compilazione sezioni iniziali.
- 2025-09-20 00:10: Aggiunta analisi sito, raccolta consigli e fonti.
- 2025-09-20 00:40: Aggiornati metadata, navigazione, UX mobile case study, piano motion e interazioni future.
