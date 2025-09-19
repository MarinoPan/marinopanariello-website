# Localizzazione completa in inglese

## Analisi requisiti
- Tradurre in inglese tutti i testi presenti nel sito (componenti, pagine, metadata, CTA, documentazione interna mostrata in UI).
- Assicurare coerenza terminologica e tono professionale, mantenendo l'allineamento con il brand personale.
- Gestire eventuali stringhe duplicate o riutilizzate per evitare inconsistenze.
- Aggiornare testi dei metadati SEO e delle email/CTA se presenti in italiano.

## Rischi
- Possibile omissione di stringhe annidate o dinamiche che non emergono da una ricerca semplice.
- Potenziali regressioni visive dovute a lunghezza differente dei testi (necessaria verifica manuale/Playwright se applicabile).
- Mancanza di supporto i18n strutturato: modifiche manuali potrebbero complicare future localizzazioni.
- Lint/build potrebbero continuare a fallire per versione Node non compatibile (come rilevato in task precedente).

## Ipotesi
- Il progetto non utilizza un sistema di localizzazione; i testi sono codificati direttamente nei file JSX/TSX/MDX.
- Non sono presenti stringhe generate tramite API al runtime che richiedano interventi server-side.
- Si può tradurre liberamente mantenendo enfasi su ruoli, metriche e call-to-action.

## Criteri di accettazione
- Tutte le pagine e componenti del sito presentano testi unicamente in inglese.
- Metadati `metadata.title` e `metadata.description` risultano tradotti.
- CTA e messaggi descrittivi mantengono chiarezza e tono professionale in inglese.
- Verifica lint/build eseguita (o documentato impedimento).

## Cosa è stato fatto
- Analizzata la codebase per individuare tutte le stringhe in italiano (pagine principali, componenti, mdx, policy legali).
- Tradotte in inglese le sezioni About, Works e le card dei progetti (`app/about/page.tsx`, `app/components/Work.tsx`, `app/works/page.tsx`).
- Allineata la call-to-action della pagina About (`Scrivimi` → `Email me`) per garantire coerenza linguistica.
- Aggiornati i casi studio MDX (Docsity, VetrinaLive, Rosmariano, Coraly, Diagnostic Biochips) con contenuti e alt text in inglese.
- Riscritta in inglese la documentazione legale per All Party Animation (privacy, cookie, termini) e Fiabe Magiche (privacy, cookie, terms of service).
- Eseguito `npm run lint`; il comando fallisce perché l'ambiente usa Node.js 14.21.3 mentre Next.js richiede >= 18.17 (impedimento già noto, da risolvere aggiornando Node).
