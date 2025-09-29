# Installazione @vercel/analytics

## Analisi requisiti
- Risolvere il conflitto npm che impedisce l'installazione di `@vercel/analytics` mantenendo la compatibilità con l'attuale stack Next.js canary + Tailwind CSS 4 alpha.
- Identificare la combinazione di versioni per `@types/node`, `vite` (dipendenza transitiva) e altri peer che soddisfi i vincoli senza forzare l'installazione.
- Documentare i passaggi necessari affinché l'installazione vada a buon fine.

## Rischi
- Aggiornare `@types/node` potrebbe introdurre incongruenze con il toolchain esistente o rompere la compilazione TypeScript.
- Eventuali cambi di versione nelle dipendenze potrebbero richiedere aggiornamenti di configurazione o generare regressioni non coperte da test attuali.
- Forzare l'installazione con `--legacy-peer-deps` potrebbe nascondere problemi reali di compatibilità e creare build instabili.

## Ipotesi
- Il progetto utilizza npm (o un lock compatibile) nonostante la presenza di `pnpm-lock.yaml`; si assume che la gestione corrente avvenga con npm.
- L'errore è dovuto all'introduzione di `vite@7.1.7` come dipendenza transitiva dei pacchetti Vercel, che richiede `@types/node` >=20.19.0 o >=22.12.0.
- Non sono presenti override manuali delle dipendenze in `package.json` o configurazioni che impongano versioni più vecchie di `@types/node` per motivi specifici.

## Criteri di accettazione
- `npm install` completa senza errori di risoluzione dopo la modifica proposta.
- La versione di `@types/node` (o eventuali altre dipendenze toccate) risulta compatibile con il progetto esistente, verificata tramite `npm run lint` e `npm run build`.
- La documentazione in questo file viene aggiornata con i passaggi eseguiti e l'esito finale.
- Nessun utilizzo di opzioni `--force` o `--legacy-peer-deps` per aggirare il conflitto.

## Cosa è stato fatto
1. Aggiornata la dipendenza `@types/node` a `^20.19.0` per soddisfare il vincolo introdotto da `vite@7.1.7` (richiesto da `@vercel/analytics`).
2. Rieseguito `npm install` per rigenerare gli artefatti (`node_modules`, `package-lock.json`) confermando che la risoluzione avviene senza errori ERESOLVE.
3. Avviato `npm run lint`: lo script fallisce perché l'ambiente locale usa Node.js v14.21.3, incompatibile con Next.js canary (>=20.9.0). È necessario aggiornare Node per completare la verifica.
4. Installato Node.js v24.3.0 tramite nvm (necessario per le feature Next.js e per un lockfile aggiornato) e rigenerato l'ambiente (`rm -rf node_modules package-lock.json`).
5. Rieseguito `npm install` con Node v24.3.0, generando un nuovo `package-lock.json` e installando `@vercel/analytics@1.5.0` assieme a `next@14.2.33` (risoluzione automatica tramite tag `canary`).
6. Validati `npm run lint` e `npm run build`, entrambi conclusi con esito positivo.
