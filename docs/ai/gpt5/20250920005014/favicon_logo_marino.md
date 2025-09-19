# Favicon SVG con logo Marino

## Analisi requisiti
- Impostare una favicon basata sul logo esistente (`public/images/logo-marino.svg`).
- Preferire formato SVG per browser moderni, con eventuale fallback per Safari.
- Integrare la favicon tramite convenzioni App Router di Next.js (file-based metadata).

## Rischi
- Safari non supporta favicon SVG: necessario fallback raster.
- Possibili problemi di leggibilità se il logo è complesso o non quadrato.
- Conversione SVG→PNG potrebbe richiedere tool non presenti localmente.

## Ipotesi
- Il logo può essere riutilizzato senza modifiche come icona vettoriale quadrata.
- Possiamo sfruttare `app/icon.svg` (Next.js) e, se disponibile lo strumento, generare un PNG 32x32 come fallback.
- Non sono presenti favicon precedenti da mantenere.

## Criteri di accettazione
- Il progetto espone `app/icon.svg` basato sul logo richiesto.
- Esiste un fallback raster (PNG o ICO) referenziato dalla metadata API di Next.js.
- Documentazione aggiornata con log attività e test.

## Log attività
- Copiato il logo ufficiale in `public/favicon.svg` per i browser con supporto SVG.
- Creato `app/icon.tsx` per generare una favicon PNG (fallback per Safari) tramite `ImageResponse`.
- Aggiornato `app/layout.tsx` definendo `metadata.icons` con il riferimento all'SVG.
- Tentativo di conversione diretto SVG→PNG via CLI fallito per assenza di `magick/convert`; fallback gestito via `ImageResponse`.
- Eseguito `pnpm lint` (fallisce: ambiente Node.js locale fermo alla v14.21.3, pnpm richiede ≥ 16.14).
