# Analisi requisiti
- Migliorare l'adattamento mobile del sito (layout, tipografia, spazi) con validazione Playwright.
- Aggiornare disposizione immagini in `app/components/SingleWork.tsx`: immagini dritte ma con coordinate randomiche controllate.
- Inserire immagini corrette per i lavori in `app/works/page.tsx` (es. Diagnostic Biochips).
- Aggiornare navigazione: rimuovere voce Blog, aggiungere link GitHub.
- Rimuovere animazioni nella hero.
- Creare nuova pagina About ispirata al design esterno e inserirla in navigazione.

# Rischi
- Possibili regressioni layout desktop durante ottimizzazione mobile.
- Randomizzazione immagini potrebbe causare sovrapposizioni o layout instabile.
- Mancanza materiale grafico aggiornato (immagini corrette non fornite esplicitamente).
- Rimozione animazioni potrebbe lasciare spazio vuoto o impatti sulle performance di ingresso elementi.
- Creazione pagina About richiede coerenza stilistica e contenuti (testi/foto) non totalmente definiti.

# Ipotesi
- Le immagini corrette sono presenti nella repo o fornibili dal cliente.
- Il design attuale usa Tailwind/Next.js e possiamo modificarlo senza vincoli server.
- I test/lint esistono e sono eseguibili localmente.
- Playwright configurato nel progetto.

# Criteri di accettazione
- Layout mobile responsivo e leggibile su viewport tipici (375px, 414px) con verifica Playwright.
- `SingleWork` mostra immagini dritte, con variazione di posizione controllata e senza sovrapposizioni critiche.
- Tutti i lavori in `app/works/page.tsx` hanno immagini corrette visibili.
- Navbar mostra link GitHub al posto di Blog e include About che porta alla nuova pagina.
- Sezione hero senza animazioni precedenti, layout coerente.
- Nuova pagina About creata con design gradevole e contenuti ispirati alla pagina di riferimento.
- Test/lint/typecheck e Playwright passano.

# Cosa è stato fatto
- In attesa di implementazione.
