# Allineamento pnpm-lock per build Vercel

## Analisi requisiti
- Ripristinare la build Vercel fallita a causa di `ERR_PNPM_OUTDATED_LOCKFILE`.
- Allineare `pnpm-lock.yaml` alle versioni dichiarate in `package.json`.
- Garantire che l'installazione rimanga riproducibile in CI con `pnpm install --frozen-lockfile`.

## Rischi
- Rigenerando il lockfile potremmo aggiornare le versioni risolte provocando regressioni.
- Possibili conflitti con `package-lock.json` se strumento npm viene usato altrove.
- Ambiente CI potrebbe richiedere aggiornamenti dei test o di configurazioni successive.

## Ipotesi
- Il progetto utilizza `pnpm` come package manager principale.
- Le modifiche recenti a `package.json` sono intenzionali e devono riflettersi nel lockfile.
- Non ci sono dipendenze locali personalizzate che richiedono passaggi extra.

## Criteri di accettazione
- `pnpm install --frozen-lockfile` completa con successo in locale.
- Il file `pnpm-lock.yaml` risulta aggiornato senza introdurre dipendenze estranee.
- I comandi di verifica (`pnpm lint`, `pnpm test:e2e` se applicabile) restano verdi o con esiti documentati.

## Cosa è stato fatto
- 2025-09-29 22:36 UTC: eseguito `nvm use 20.19.5` e `pnpm install --lockfile-only` per rigenerare `pnpm-lock.yaml`.
- 2025-09-29 22:39 UTC: verificato `pnpm install --frozen-lockfile` e `pnpm lint` con esito positivo.
