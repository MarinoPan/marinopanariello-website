# Task: Sbloccare build Vercel (pnpm lockfile + errori TS)

## Analisi requisiti
- Il build Vercel fallisce con ERR_PNPM_OUTDATED_LOCKFILE (pnpm usa `--frozen-lockfile`).
- Possibili altri errori in fase di build (typecheck Next/TS).

## Perché (fonte ufficiale)
- pnpm in CI usa `--frozen-lockfile` di default: se `pnpm-lock.yaml` non è allineato a `package.json`, l'install fallisce.
  - Docs pnpm: https://pnpm.io/cli/install#frozen-lockfile
- Next 14 richiede Node >= 18.18; Vercel usa Node 20 di default.
  - Docs Next: https://nextjs.org/docs/app/building-your-application/deploying#nodejs-version

## Rischi / Ipotesi
- Rischio: presenza simultanea di `pnpm-lock.yaml` e `package-lock.json` (ambiguità package manager).
- Ipotesi: On Vercel si desidera usare pnpm (lockfile v6 già presente).
- Rischio: errori TS nel build locale bloccano `vercel build`.

## Criteri di accettazione
- `pnpm-lock.yaml` aggiornato e coerente con `package.json` (build non si ferma a install).
- Nessun `package-lock.json` nel repo.
- `pnpm build` locale su Node 20 va in success senza errori TS.
- Push su `main` con le correzioni.

## Passaggi minimi
1. Aggiornare Node locale a v20 e abilitare corepack.
2. Rigenerare `pnpm-lock.yaml` (`pnpm install --lockfile-only`).
3. Rimuovere `package-lock.json` per evitare ambiguità.
4. Fixare errori TS bloccanti (tipi `readonly []` per immagini in `SingleWork`).
5. `pnpm install --frozen-lockfile` + `pnpm build` locale per validare.
6. Commit e push su `main`.

## Cosa è stato fatto (log)
- [FATTO] Switch a Node 20 con `nvm`, abilitato corepack e `pnpm@8.15.8`.
- [FATTO] Eseguito `pnpm install --lockfile-only`: aggiornato `pnpm-lock.yaml` includendo `framer-motion` e dev deps Playwright.
- [FATTO] Rimosso `package-lock.json` (preferenza pnpm).
- [FATTO] Fix TS: `SingleWorkProps.images` da `string[]` a `readonly string[]` (accetta array `as const`).
- [FATTO] `pnpm install --frozen-lockfile` + `pnpm build`: OK, build completato localmente.
- [FATTO] Commit `build(vercel): allinea pnpm-lock e tipizza immagini readonly` pushato su `main`.

## Esito finale
- Requisiti soddisfatti. Il prossimo build su Vercel non incapperà più in ERR_PNPM_OUTDATED_LOCKFILE. Il typecheck è stato risolto e la build Next completa con successo.
