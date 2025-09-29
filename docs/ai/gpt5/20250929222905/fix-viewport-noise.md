# Analisi iniziale

## Requisiti
- Estendere il background noise in layout per coprire intera viewport verticale su dispositivi mobile.
- Eliminare il colore anomalo visibile nell'area della status bar su iOS/Safari.

## Rischi
- Possibili regressioni di layout su breakpoint desktop/tablet.
- Eventuale degrado prestazioni se il fix modifica gestione di immagini/background.

## Ipotesi
- Il problema della status bar deriva da configurazione `theme-color` o da mancanza di `meta`/CSS per safe-area.
- Il background noise è gestito via CSS/immagine assoluta nel layout principale.

## Criteri di accettazione
- Su viewport mobile (simulata in dev tools), il background noise copre l'intero schermo senza mostrare bande.
- La status bar di Safari iOS non mostra più il colore pescato dal body, ma una tinta coerente con il layout (probabilmente scuro/trasparente).
- Nessuna regressione visibile su desktop in homepage.

## Log attività
- 2025-09-29 22:33: Analizzato `app/layout.tsx` e `app/global.css` per comprendere overlay noise e gestione colori.
- 2025-09-29 22:36: Aggiornato `metadata.themeColor` a un tono scuro (#111111) per uniformare la status bar su iOS.
- 2025-09-29 22:38: Esteso il layer noise con `fixed inset-0` e `pointer-events-none` per coprire l'intera viewport senza interferire con l'interazione.
- 2025-09-29 22:41: Tentato `npm run lint`, interrotto perché l'ambiente locale espone Node.js 14.21.3 mentre Next.js richiede >= 18.17.0.

## Esito finale
- Noise overlay ora usa `fixed inset-0` e `pointer-events-none`, coprendo l'intera viewport senza introdurre offset.
- Impostato `metadata.themeColor` su #111111 per uniformare la tinta della status bar in iOS.
- Test: `npm run lint` (fallito per versione Node 14.21.3 < 18.17.0).
