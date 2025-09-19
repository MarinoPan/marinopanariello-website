import type { Metadata } from "next";
import { SectionHeader } from "../components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Marino Panariello è un design engineer che guida team di prodotto dall'idea al rilascio con un mix di strategia, UX e front-end.",
};

const principles = [
  {
    title: "Persone prima",
    description:
      "Ogni progetto nasce da ascolto e ricerca qualitativa. Traduco problemi complessi in percorsi chiari che rispettano bisogni e contesto degli utenti.",
  },
  {
    title: "Sistemi scalabili",
    description:
      "Design system modulari, governance e documentazione: creo fondamenta condivise che accelerano team e mantengono coerenza cross-prodotto.",
  },
  {
    title: "Delivery consapevole",
    description:
      "Collaboro con gli ingegneri, prototipo in codice e trasformo concept in interfacce accessibili e performanti, pronte per la produzione.",
  },
] as const;

const experiences = [
  {
    company: "WeUni by Docsity",
    role: "Product Designer & UX Engineer",
    period: "Gen 2025 — oggi",
    highlight:
      "Ho guidato il team e progettato l'applicativo da zero, costruendo flussi e misurazioni che in soli sei mesi hanno fatto crescere i lead qualificati giornalieri di oltre il 1200%.",
    contributions: [
      "Coordinamento delle attività di discovery, UX e sviluppo end-to-end",
      "Architettura informativa e design system condivisi tra prodotto e tech",
      "Sperimentazione continua su funnel e analytics per scalare l'acquisizione",
    ],
  },
  {
    company: "Docsity",
    role: "Product Designer",
    period: "Lug 2022 — oggi",
    highlight:
      "Ho ridisegnato le pagine core (Dashboard, Upload, Homepage, landing Docsity AI) ottenendo +137% di page views, +43% di ricavi e +56% di nuovi upload.",
    contributions: [
      "Revisione UX e UI dei touchpoint principali con focus su metriche di business",
      "Nuovo modello di documentazione per un handoff fluido verso gli sviluppatori",
      "Sviluppo di pagine in Next.js sfruttando i componenti del design system",
    ],
  },
  {
    company: "Lasting Dynamics",
    role: "UI/UX Designer",
    period: "Feb 2018 — Lug 2022",
    highlight:
      "Ho guidato progetti web e mobile, dall'analisi ai test, per prodotti SaaS, e-commerce e piattaforme data-driven in mercati internazionali.",
    contributions: [
      "Workflow Management System: metodologia agile con -30% sui tempi ciclo e +25% di efficienza",
      "E-commerce Builder: tool modulare adottato da oltre mille clienti",
      "Applicazioni neuroscienza cloud con +40% di velocità di elaborazione",
      "CRM e piattaforme verticali per energia, education e gaming su blockchain",
    ],
  },
  {
    company: "Freelance",
    role: "Product Designer & Front-end Partner",
    period: "2018 — oggi",
    highlight:
      "Creo app, siti ed e-commerce in settori diversi, integrando ricerca, design e sviluppo front-end per lanciare esperienze digitali solide.",
    contributions: [
      "Percorsi completi: analisi utenti, user flow, wireframe, prototipi e UI development",
      "Design system leggeri e kit componenti per team interni e agenzie",
      "Supporto continuo a startup e PMI su ottimizzazione, misurazione e iterazioni",
    ],
  },
] as const;

export default function AboutPage() {
  return (
    <div className="mx-auto grid w-full grid-cols-4 md:grid-cols-12">
      <div className="col-span-8 flex flex-col gap-24 pb-24 text-primary md:col-span-8 md:col-start-3">
        <section className="grid grid-cols-12 gap-y-6 text-left">
          <div className="col-span-12">
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-primary/60">
              About
            </span>
          </div>
          <div className="col-span-12">
            <h1 className="m-0 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
              Progetto prodotti che uniscono visione strategica, design system e
              ship veloce.
            </h1>
          </div>
          <div className="col-span-12">
            <p className="m-0 text-base leading-relaxed text-primary/75 sm:text-lg">
              Dal primo workshop alla release, affianco team cross-funzionali
              per definire priorità, creare interfacce essenziali e costruire
              processi che durano. Mi muovo con facilità tra design e codice per
              mantenere il prodotto coerente e misurabile.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <SectionHeader kicker="Esperienze" title="Percorso professionale" />
          </div>
          <div className="col-span-12 space-y-10 md:col-span-8">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="grid grid-cols-12 gap-y-3"
              >
                <div className="col-span-12">
                  <h3 className="m-0 text-xl font-semibold text-primary sm:text-2xl">
                    {experience.company}
                  </h3>
                  <p className="m-0 text-sm uppercase tracking-[0.18em] text-primary/50">
                    {experience.role}
                  </p>
                </div>
                <span className="col-span-12 text-sm font-medium text-primary/60">
                  {experience.period}
                </span>
                <p className="col-span-12 m-0 text-sm leading-relaxed text-primary/75 sm:text-base">
                  {experience.highlight}
                </p>
                <ul className="col-span-12 m-0 grid list-disc gap-2 pl-5 text-sm text-primary/70 sm:text-base">
                  {experience.contributions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <SectionHeader
              kicker="Collaboriamo"
              title="Cosa possiamo costruire insieme"
            />
          </div>
          <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
            <a
              href="mailto:hello@marinopanariello.com"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-primary/90"
            >
              Scrivimi
            </a>
            <p className="m-0 text-sm leading-relaxed text-primary/70">
              Preferisci una call? Possiamo analizzare bisogni, vincoli e
              definire un piano condiviso nelle prossime 48 ore.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
