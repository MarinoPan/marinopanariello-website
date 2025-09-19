# Bordo giallo immagini Single Work

## Analisi requisiti
- Applicare un bordo giallo a tutte le immagini mostrate dal componente `SingleWork` (variant mobile + desktop).
- Utilizzare, se disponibile, un token colore esistente; in assenza, introdurre un nuovo token coerente con la nomenclatura attuale.
- Garantire che il bordo sia visibile rispettando il design attuale (spessori e ombre coerenti).

## Rischi
- Incoerenza cromatica tra modalità chiara/scura se il token non viene definito anche nella media query dark.
- Possibili regressioni di layout (overflow, sovrapposizione con ombre) nelle disposizioni assolute del componente.
- Mancata conformità con Tailwind se non aggiorniamo `@theme`/config con il nuovo token.

## Ipotesi
- Il bordo giallo richiesto ha colore esadecimale `#FFD600`.
- Il componente `SingleWork` è l’unico punto in cui dobbiamo intervenire per mostrare le immagini in /works e nelle altre viste.
- L’attuale spessore del bordo può restare `1px` (classe `border`).

## Criteri di accettazione
- Tutte le immagini renderizzate da `SingleWork` mostrano un bordo giallo costante in entrambe le varianti responsive.
- Il colore del bordo è gestito tramite token (CSS var + mapping Tailwind) e funziona sia in light che in dark mode.
- Nessuna regressione visiva apparente: le ombre rimangono visibili e non vengono mascherate dal bordo.
- Documentazione aggiornata con log attività e test eseguiti.

## Log attività
- Analizzato `SingleWork` e verificata assenza di token giallo preesistente.
- Aggiunto token `--color-highlight` (`#FFD600`) in `app/global.css` e mappato in `tailwind.config.js`.
- Applicato il nuovo token come `border-highlight` in entrambe le varianti mobile/desktop di `SingleWork`.
- Eseguito `pnpm lint` (fallisce: ambiente Node.js locale fermo alla v14.21.3, pnpm richiede ≥ 16.14).
