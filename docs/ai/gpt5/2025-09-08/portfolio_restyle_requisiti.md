# Requisiti — Restyle Portfolio Marino

Data: 2025-09-08

Autore: Codex (assistente)

Repository: `marinopanariello-website`

Stile da mantenere: font Satoshi, griglia/linee di sfondo, noise overlay, animazioni pulite da Framer Motion.

---

## Output standard

- **Verdetto:** creare una base chiara dei requisiti per rifattorizzare UI, contenuti e animazioni del portfolio, enfatizzando il posizionamento come Product Designer con esperienza in sviluppo web e mobile, e mettendo in risalto i progetti lanciati (Fiabe Magiche, f1livestats.com, fabloo.it) e i siti sviluppati.

- **Perché:** allineare storytelling, struttura e microinterazioni ai riferimenti indicati, mantenendo lo stile attuale del sito e preparando un’implementazione scalabile (MDX/Next App Router) con animazioni performanti (Framer Motion), SEO e accessibilità.

- **Rischi/Ipotesi:**
  - Ipotesi: contenuti (testi, metriche, asset visual) sono disponibili o producibili a breve.
  - Rischio: animazioni e immagini pesanti possono impattare performance; mitigazione con lazy-loading, motion-reduce, immagini ottimizzate, preloading selettivo.
  - Ipotesi: si conferma uso di Next.js App Router + Tailwind + Framer Motion (già presenti).
  - Rischio: tempo per scrivere case study completi; mitigazione con template e progressive disclosure.

- **Passaggi minimi:**
  1) Definizione contenuti e IA (mappa sezioni + tono voce).
  2) Scelte di animazioni per Home e Work (pattern riutilizzabili).
  3) Template Project/Case Study (MDX + immagini).
  4) Implementazione UI/animazioni + revisione responsive.
  5) SEO, accessibilità, performance e QA.

- **Criteri di accettazione:**
  - Home aggiornata con hero chiaro: “Product Designer” + “sviluppo web/app” in evidenza.
  - Sezione “Progetti lanciati” con 3 card/pagine: Fiabe Magiche (in risalto), f1livestats.com, fabloo.it.
  - Sezione “Siti sviluppati” a mosaico/scroller con 6–12 esempi (thumb + ruolo + stack breve).
  - Sezione “Selected Work/Design” con 3–5 case study sintetici (overview → impatto → process → outcome).
  - Animazioni coerenti con i riferimenti, rispettando `prefers-reduced-motion`.
  - Mobile-first, Lighthouse ≥ 90 per Performance/Best Practices/SEO.

---

## Contesto e obiettivi

Marino vuole posizionarsi come Product Designer con forte competenza tecnica nello sviluppo web e mobile. Oltre alle esperienze lavorative, vuole evidenziare i prodotti realmente lanciati (Fiabe Magiche, f1livestats.com, fabloo.it) e un portfolio di siti realizzati, mantenendo lo stile attuale (Satoshi, griglia di linee, noise) e arricchendolo con animazioni di qualità ispirate ai siti forniti.

Obiettivi chiave:
- Clarificare il posizionamento (product design + engineering) sin dall’hero.
- Evidenziare “lanci reali” con metriche/impatti; dare priorità a Fiabe Magiche.
- Organizzare i “Siti sviluppati” in una vista compatta e scorrevole.
- Offrire case study di design sintetici, leggibili e misurabili.
- Migliorare microinterazioni e motion mantenendo performance.

---

## Riferimenti analizzati (osservazioni sintetiche)

Nota: analisi qualitativa preliminare; in fase di design definiremo i pattern esatti per ogni sezione.

- Israelsundseth (Framer):
  - Micro-animazioni fluide, ingressi su scroll, tipografia forte.
  - Sezioni con ritmo, componenti riutilizzabili con reveal.

- Billy Sweeney:
  - Layout minimale, focus sul testo, ritmo tipografico e gerarchie chiare.

- Elvis Obanya (#impact):
  - Sezione impatto con metriche grandi e chiare; idea da replicare per i prodotti lanciati.

- Johanna Darrieta (#work):
  - Griglia lavori/cover con hover states eleganti; transizioni a pagine dettagli.

- Klemenc.si:
  - Tipografia/geometrie con movimento sottile; forte senso di personalità.

- Why Ramachandran (Case study #final-design):
  - Struttura case study lineare e scannable (overview → processo → final design → impatto).

Pattern trasversali da adottare:
- Scroll reveal progressivo, transizioni tra sezioni/pagine, hover ricchi ma performanti.
- Blocchi “Impact/Metrics” in evidenza, hero con payoff forte, immagini/video compressi/ottimizzati.

---

## Mappa sezioni proposta (IA)

1) Home
   - Hero (H1 + sottotitolo posizionante: Product Designer + Dev web/app).
   - “Progetti lanciati” (Fiabe Magiche in evidenza, poi f1livestats, fabloo) con metriche.
   - “Siti sviluppati” (mosaico/scroller con logo/thumb, ruolo, stack breve).
   - “Selected Design Work” (3–5 case con sintesi e CTA a dettagli).
   - About/Trust (ruolo, contatti, link CV/LinkedIn, piccole credenziali).

2) Progetti lanciati (pagine dettaglio)
   - Template per: Fiabe Magiche (primario), f1livestats.com, fabloo.it.
   - Struttura: overview → problema → soluzione → impatto/metriche → galleria (immagini/video) → stack/ruolo.

3) Siti sviluppati
   - Griglia fluida o marquee scorrevole con 6–12 esempi, filtri leggeri opzionali.

4) Selected Work / Case Study (design)
   - Elenco case sintetici con immagini e “key outcomes”.
   - Pagine dettaglio MDX (se richieste) con sezioni standard.

5) About & Contatti
   - Bio breve, competenze, strumenti, link social, email, eventuale disponibilità.

---

## Requisiti funzionali

- Presentazione chiara del doppio profilo: Product Designer + sviluppo (web/app mobile).
- Sezione “Progetti lanciati” con: descrizione, metriche, ruolo, stack, link live/store, media.
- Fiabe Magiche con priorità editoriale (hero dedicato nella pagina, evidenza anche in Home).
- “Siti sviluppati”: mosaico con anteprime, ruolo, stack, link.
- Case study design: overview sintetica e misurabile.
- Navigazione semplice (navbar minimal) + footer essenziale.

## Requisiti non funzionali

- Performance: immagini ottimizzate (Next/Image), lazy-loading, riduzione motion.
- Accessibilità: contrasto, focus stati, aria-label dove necessario.
- SEO: meta per pagine progetto, OG image, sitemap/robots già presenti.
- Manutenibilità: contenuti in MDX per progetti/case, componenti riutilizzabili.

---

## Animazioni (proposta tecnica)

- Stack: Framer Motion + Intersection Observer; rispettare `prefers-reduced-motion`.
- Pattern riutilizzabili:
  - Reveal su scroll (fade+translate, stagger),
  - Hover cards (immagine che si alza/scala, titolo che slitta),
  - Transizioni pagina (opacity/crossfade leggero),
  - Marquee/mosaico scorrevole per “Siti sviluppati”,
  - Blocchi “Impact/Metrics” con contatore/entrata rapida.
- Background corrente: mantenere `BackgroundLines` + noise overlay; rendere parametrici tempi/delay.

---

## Struttura contenuti / dati

- MDX per progetti/case: `app/projects/[slug]/page.mdx` con frontmatter: `title`, `role`, `stack`, `year`, `impact`, `links`, `cover`.
- Lista in Home: generata da file di indice/JSON o import statico dai frontmatter.
- Media: cartella `public/images/projects/<slug>/` con cover + gallery.

---

## Domande per allineamento (necessarie prima di iniziare)

1) Tono di voce: italiano, inglese o bilingue? Preferenze per headline/sottotitoli?
2) Fiabe Magiche: metriche disponibili (utenti, storie generate, retention, rating, MRR/entrate)? Link store/sito, logo/icone ufficiali?
3) f1livestats.com: stato attuale, utenti/telemetria, metriche chiave, immagini della dashboard, stack tecnico.
4) fabloo.it: target, principali feature, metriche/traffico, immagini UI, stato prodotto.
5) Siti sviluppati: elenco di 6–12 siti con ruolo, stack, link e 1 immagine ciascuno.
6) Design work (per aziende): scegliere 3–5 progetti con impatto misurabile (es. +X% conversion, -Y% bounce) e 1–2 immagini “prima/dopo”.
7) Preferenze tipografiche: confermiamo Satoshi al 100%? Accenti/italic, dimensioni del body e headings attuali ok?
8) Palette/brand: teniamo palette corrente? Hai colori accent da usare per metriche/hover?
9) Livello di animazioni: da 1 (minime) a 5 (più ricche). Qual è il range che desideri?
10) Lingua del sito: interamente IT, EN, o switchabile?
11) Priorità SEO: keyword principali? Pagina “Fiabe Magiche” deve rankare per ricerche specifiche?
12) Asset: hai loghi/icone/video dei prodotti? Formato preferito (webp/mp4) e dimensioni massime?
13) Call to action: contatto via email/LinkedIn? Vuoi un form o solo link?
14) Blog: manteniamo l’attuale sezione/MDX? Va riorganizzato nel menu?
15) Vincoli temporali: scadenze o milestone (es. lancio Fiabe Magiche)?

---

## Piano minimo di implementazione

1) Contenuti & IA finali (risposte alle domande + mappe pagine).
2) Componenti UI: Hero, Cards Progetti, Mosaico Siti, Block Metrics, CaseList.
3) Template project/case (MDX) + routing in `app/projects/[slug]`.
4) Animazioni riutilizzabili (utility Framer + hooks motion-reduce).
5) Ottimizzazioni: immagini Next/Image, SEO/OG, A11y, Lighthouse.
6) QA responsive + piccoli test d’integrazione su routing.

---

## Cosa è stato fatto (log)

- 2025-09-08: Raccolta requisiti iniziali, proposta IA, domande aperte; analisi preliminare dei riferimenti e del codice in `app/components` (Hero, Work, WorksWall, BackgroundLines, nav/footer, global.css).
- 2025-09-08: Allineamenti ricevuti: lingua EN; Fiabe Magiche con placeholder (nessun asset al momento); f1livestats.com e fabloo.it online e con immagini disponibili lato utente; Hero da mantenere, arricchire con elementi animati sottili.
- 2025-09-08: Implementazione iniziale UI:
  - Aggiunto `HeroOrnaments` con gradient blob/dot/square a bassa opacità e animazioni leggere rispettose di `prefers-reduced-motion` (file: `app/components/HeroOrnaments.tsx`) e integrato in `Hero.tsx`.
  - Creata sezione `LaunchedProjects` con 3 card (Fiabe Magiche placeholder, F1 Live Stats, Fabloo) con reveal su scroll, hover dolce, CTA e immagini placeholder temporanee (file: `app/components/LaunchedProjects.tsx`).
  - Inserita `LaunchedProjects` in home tra `Hero` e `WorksWall` (file: `app/page.tsx`).
  - Creata sezione `SitesDeveloped` con marquee leggero di loghi/siti sviluppati (file: `app/components/SitesDeveloped.tsx`) e integrata in home.
  - Scaffolding pagine progetto in MDX: util `app/projects/utils.ts`, routing `[slug]` (`app/projects/[slug]/page.tsx`), indice `app/projects/page.tsx`, e 3 MDX (`app/projects/posts/fiabe-magiche.mdx`, `f1livestats.mdx`, `fabloo.mdx`).
- 2025-09-08: Refinement su richiesta:
  - `LaunchedProjects`: rimosse tinte grigie/border, testi su sfondo pagina, colori più minimali.
  - `SitesDeveloped` → rinominato “Websites Developed”, elenco aggiornato con i domini forniti, stile minimale (solo testo), pausa animazione su hover, rimosse diciture ruolo/stack.
  - Intestazioni sezione differenziate tramite `SectionHeader` con varianti (underline/none, allineamenti diversi) e integrazione in: `LaunchedProjects`, `WebsitesDeveloped`, `WorksWall`, `Work`.
- 2025-09-08: Spaziatura & Works
  - Aumentata spaziatura verticale tra sezioni in home (`app/page.tsx`: `gap-28`).
  - `SingleWork`: supporto a 2–3 immagini sfasate (overlapping, responsive) con `next/image` e layout adattivo; aggiornati dati in `Work.tsx`.
  - Aggiunte animazioni di reveal per immagini e sezione (Framer Motion) rispettando `prefers-reduced-motion`.
  - Revisione layout immagini Works: passaggio a collage a griglia (2–3 colonne) con leggere rotazioni/offset non precisi; tutte le immagini sono sempre visibili e si raddrizzano leggermente on-hover per facilitarne la visione.
- 2025-09-08: Lightbox, sticky header, footer, logo, radius
  - Aggiunta lightbox per le immagini di “Selected Work” (click per ingrandire, tasti ←/→ e ESC, chiusura su overlay).
  - Navbar ora sticky sempre (top-0) con sfondo traslucido e bordo inferiore.
  - Footer minimal attivato e con copyright aggiornato.
  - Logo SVG aggiornato full yellow per visibilità su sfondo scuro.
  - Rimossi border-radius da immagini e card/sezioni principali (LaunchedProjects, SitesDeveloped, Works collage, MDX image wrapper).
- 2025-09-08: Progetti (stub)
  - Creati MDX per progetti aggiuntivi basati sugli asset presenti: `docsity`, `vetrinalive`, `coraly`, `labbox`, `rosmariano`.
  - Nota: il sito attuale `marinopanariello.com` risponde con contenuti placeholder (Gatsby starter) → non ho potuto importare testi originali. Ho inserito descrizioni sintetiche; appena condividi i testi definitivi li sostituiamo.

---

## Prossimi step

- Sostituzione immagini placeholder con asset finali per Fiabe Magiche, f1livestats, fabloo (`public/images/projects/<slug>/...`).
- Definizione micro-copy EN per descrizioni e metriche (quando disponibili), con blocco “Impact” opzionale.
- Ampliare l’elenco “Sites Developed” (6–12 voci), aggiungere eventuali filtri/tag se utile.
- Preparazione template MDX per pagine progetto (`app/projects/[slug]/page.mdx`) con frontmatter e routing.
- 2025-09-08: Works page & Home selection
  - Home: 3 "Selected Work" (aggiunto terzo progetto: Labbox).
  - Nuova pagina `app/works/page.tsx`: aggrega Launched Projects (MDX), Design Projects (MDX esclusi launched) e tutti i Websites Developed.
  - Navbar aggiornata con link a "works".
- 2025-09-08: Nessuna pagina singolo progetto
  - Aggiornata `LaunchedProjects` per puntare ad anchor su `/works#slug`.
  - In `/works` i progetti sono mostrati inline con cover + contenuto MDX (niente routing dedicato).
  - Immagini MDX cliccabili per apertura a dimensione piena in nuova tab.
- 2025-09-08: Home structure & new sections
  - Ordine sezioni: Hero → Websites Developed (solo carosello) → My Projects → Services (4 card) → Selected Work (2 items + CTA).
  - `SitesDeveloped`: rimosso titolo, aggiunti link Fiabe Magiche e f1livestats.com.
  - `LaunchedProjects` rinominato semanticamente in "My Projects" e maggiore spaziatura (mt-10, gap-8).
  - `Services`: nuova sezione con 4 card con bordo (Product Design, Design System, Web & App, Prototyping & Research).
  - `Work`: ora mostra solo Docsity e Coraly, con bottone "View more" verso `/works`.
- 2025-09-08: Works page revisione
  - `/works` ora mostra SOLO `SingleWork` per tutti i progetti (Design + My Projects) senza la lista siti sviluppati.
- 2025-09-08: Hero animation
  - Sostituiti gli ornaments con `HeroDoodles` (SVG doodles grezzi: star rough, star sharp, puzzle). Posizioni random a ogni load, path drawing + sway lento; rispetto di prefers-reduced-motion.
- 2025-09-08: Services refinements
  - Servizi espansi con descrizioni: Product Design; Design System; Websites; Web & Mobile Apps (gestionali, CRM, app mobile).
- 2025-09-08: Websites carousel
  - Aggiunto fabloo.it e ordinato l’elenco; Fiabe Magiche e f1livestats prominenti.
