# Fix lint Hero.tsx apostrofo

## Analisi requisiti
- Risolvere l'errore ESLint `react/no-unescaped-entities` presente nella heading del componente `Hero`.
- Mantenere invariato il contenuto semantico e stilistico del testo.
- Assicurare compatibilità con le linee guida sui caratteri (preferenza ASCII o entity HTML).

## Rischi
- Introduzione di caratteri speciali non previsti che potrebbero violare la policy di encoding del progetto.
- Altre occorrenze simili potrebbero restare non gestite e causare futuri fallimenti lint.

## Ipotesi
- Il problema riguarda solo l'apostrofo in `I'm` nella stringa del componente `Hero`.
- Sostituire l'apostrofo con un'entità HTML (`&apos;`) è accettato dallo stile del progetto.

## Criteri di accettazione
- `pnpm lint` non deve più bloccare la build per il componente `Hero` (limite: ambiente Node locale richiede upgrade >16.14 per eseguire il comando).
- Il testo reso nel browser resta "Hi, I'm a design engineer who merges code and design to simplify digital life.".
- Log attività aggiornato in questo documento.

## Log attività
- Corretto il testo in `app/components/Hero.tsx` sostituendo l'apostrofo con `&apos;` per rispettare `react/no-unescaped-entities`.
- Eseguito `pnpm lint` (fallisce: ambiente Node.js locale fermo alla v14.21.3, pnpm richiede ≥ 16.14).
