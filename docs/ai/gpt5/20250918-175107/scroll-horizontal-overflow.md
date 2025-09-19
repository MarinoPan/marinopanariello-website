# Analisi iniziale

## Requisiti
- Comprendere perché il `div` con classi `fixed inset-0 -z-10 px-6 pointer-events-none` genera uno scroll orizzontale.
- Proporre una correzione compatibile con l'architettura esistente, evitando regressioni visive.

## Rischi
- Possibili effetti collaterali sulla disposizione di elementi che usano lo stesso componente.
- Interazioni con altri stili globali che impostano margini negativi o trasformazioni.

## Ipotesi
- Il sito utilizza Tailwind CSS e il problema deriva da una combinazione di classi di layout.
- Lo scroll orizzontale è un comportamento indesiderato osservato in produzione.

## Criteri di accettazione
- Identificare la causa specifica dello scroll orizzontale.
- Documentare una soluzione (o più opzioni) che elimini lo scroll senza rompere il layout principale.
- Aggiornare questo file con i passaggi eseguiti e l'esito finale.

## Log attività
- 2025-09-18 17:51:07 — Creato documento e registrata analisi iniziale.
- 2025-09-18 18:00:00 — Analizzato `app/components/BackgroundLines.tsx`: l'elemento `fixed inset-0 px-6` è piena larghezza della viewport e il padding orizzontale, con `box-sizing: content-box`, dilata il box oltre i limiti del contenitore causando overflow.
- 2025-09-18 18:05:00 — Definita soluzione proposta: rimuovere `px-6` dal wrapper fisso o aggiungere `box-border`/`overflow-x-hidden` per contenere il background, prevenendo overflow.
- 2025-09-18 18:20:00 — Ispezionata `HeroDoodles`: elementi assoluti con `right-[-20%]` e `left-[-10%]` escono dalla viewport generando overflow; confermato che BackgroundLines non è la causa diretta.
- 2025-09-18 18:25:00 — Proposta soluzione: aggiungere `overflow-hidden` al `section` del `Hero` oppure ridurre gli offset (`right-[-20%]` → `right-0`, `left-[-10%]` → `left-0`) o usare `max-w`/`translate` per centrare senza superare la viewport. Documentata la causa e le opzioni di fix.
- 2025-09-18 18:35:00 — Valutate alternative alle forme: preferenza per gradienti radiali su pseudo-elementi o wrapper con `overflow-hidden`, oltre a introduzione di keyframe per animare scala/traslazione.
- 2025-09-18 18:45:00 — Aggiornato `HeroDoodles` con wrapper ingrandito e blob animati; aggiunte classi e keyframe in `app/global.css` per animazioni rispettose di reduced motion.
- 2025-09-18 19:15:00 — Rinominato `HeroDoodles` in `Blob`, spostato in layout globale e aggiornate animazioni/gradienti per coprire nav e sezioni successive senza overflow.
- 2025-09-18 19:25:00 — Regolati z-index e intensità gradienti del nuovo `Blob` per renderlo visibile (z-0/mix-blend-screen) senza interferire con il contenuto.
- 2025-09-18 19:40:00 — Rimossa la wrapper `-inset-[28%]` dal componente `Blob`; ora le forme sono figlie dirette del container fisso, chiarendo il riferimento per i posizionamenti assoluti.
