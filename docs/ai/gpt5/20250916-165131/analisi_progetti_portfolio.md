# Analisi iniziale

## Requisiti
- Raccogliere contenuti testuali e metadati per i progetti Docsity, Coraly, Rosmariano, Diagnostic Biochips e Vetrinalive dal sito https://marinopanariello.com.
- Salvare screenshot aggiornati di ciascuna pagina di progetto per riferimento visivo interno.
- Organizzare le informazioni in modo da poterle riutilizzare nel portfolio corrente del repository.

## Rischi
- Possibili limitazioni di accesso alla rete o blocchi durante la navigazione del sito.
- Contenuti dinamici difficili da catturare automaticamente senza interazione manuale.
- Incongruenze tra la struttura del sito e le aspettative sul numero di pagine da analizzare.

## Ipotesi
- Il sito è pubblicamente accessibile e le pagine dei progetti elencati sono raggiungibili via URL.
- È consentito l'uso di Playwright per acquisire screenshot e testo delle pagine.
- Le informazioni presenti sul sito sono aggiornate e affidabili per il nostro portfolio.

## Criteri di accettazione
- Documento riepilogativo in repository con dettagli per ciascun progetto (descrizione, tecnologie, ruoli o risultati rilevanti).
- Cartella con screenshot leggibili di tutte le pagine richieste.
- Log delle attività nel presente file aggiornato con le azioni eseguite.
- Conferma che eventuali test o validazioni pertinenti sono stati eseguiti o giustificati.

## Prossimi passi
- Navigare il sito utilizzando Playwright per individuare e catturare contenuti e screenshot.
- Estrarre e sintetizzare le informazioni rilevanti.
- Aggiornare il presente documento con il log delle attività svolte.

## Cosa è stato fatto
1. Navigazione con Playwright delle pagine dei progetti richiesti per estrarre i contenuti testuali.
2. Acquisizione di screenshot full page per Docsity, Coraly, Rosmariano, Diagnostic Biochips e Vetrinalive.
3. Sintesi delle informazioni raccolte nel file `raccolta_progetti.md` con highlight utili per l'inserimento nel portfolio.
4. Organizzazione degli asset nella cartella `docs/ai/gpt5/20250916-165131/`.
5. Aggiornati i file MDX dei progetti per allineare copy e sezioni con i contenuti raccolti.
6. Creato il case study `diagnosticbiochips.mdx` con nuova sintesi e struttura.
7. Aggiornati i blocchi SingleWork in homepage (`Work.tsx`) con nuove metriche e descrizioni.
8. Allineato l'elenco completo in `/works` con i dati aggiornati, includendo Diagnostic Biochips e nuove stringhe.
9. Aggiornata la sezione `LaunchedProjects.tsx` con immagini finali e link esterni per Fiabe Magiche, F1 Live Stats e Fabloo.
10. Esteso `SingleWork` per mostrare CTA opzionale e allineato `/works` con nuovi asset e link di prodotto.
11. Creata la directory `public/app/storie-narrative/` replicando i contenuti legali (cookie/privacy/termini) con testi invariati e alias utili per i servizi esterni.
12. Spostati i documenti All Party Animation nella nuova cartella `public/app/allparty-animation/` mantenendo testi e nomi originali.
13. Ripulite le cartelle `public/app/storie-narrative/` e `public/app/allparty-animation/`, rimuovendo duplicati con suffissi e lasciando solo i file ufficiali; eliminata anche la vecchia `public/static/`.
14. Sostituiti i file HTML con pagine TSX dedicate (cartelle `app/app/storie-narrative/` e `app/app/allparty-animation/`) mantenendo i testi invariati ma con nuovo layout pulito; aggiunti rewrite `.html` in `next.config.mjs`.
