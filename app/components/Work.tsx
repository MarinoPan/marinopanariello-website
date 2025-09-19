"use client";
import { SingleWork } from "./SingleWork";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    project: "Docsity",
    year: "lug 2022 - oggi",
    results: "+137% visualizzazioni documento; +56% nuovi upload; +43% ricavi ricorrenti",
    roles: "Product Designer · Roma, Italia",
    about:
      "Ho ridisegnato dashboard, homepage, flusso di upload e landing Docsity AI, creando un modello di documentazione condiviso e sviluppando le pagine chiave direttamente in Next.js con il design system.",
    images: [
      "/images/projects/docsity-1-after.jpg",
      "/images/projects/docsity-2-after.jpg",
      "/images/projects/docsity-3-after.jpg",
    ],
  },
  {
    project: "Lasting Dynamics",
    year: "feb 2018 - lug 2022",
    results: "-30% cycle time; +25% efficienza team; +1k store generati",
    roles: "UI/UX Designer · Napoli (IT) & LPA (ES)",
    about:
      "Ho guidato progetti web e mobile end-to-end, dalla ricerca ai test, su workflow management, e-commerce builder, piattaforme neuroscience e CRM dedicati.",
    images: [
      "/images/projects/coraly-01.jpg",
      "/images/projects/coraly-02.jpg",
      "/images/projects/coraly-03.jpg",
    ],
  },
  {
    project: "Freelancer",
    year: "2016 - oggi",
    results: "40+ siti, e-commerce e app gestionali consegnati",
    roles: "Design Engineer",
    about:
      "Supporto startup e PMI nella definizione di brand, UX e sviluppo front-end con Next.js, CMS headless e design system leggeri, seguendo il prodotto dalla strategia al lancio.",
    images: [
      "/images/projects/fabloo.png",
      "/images/projects/vetrinalive-02.jpg",
      "/images/projects/f1livestats.png",
    ],
  },
  {
    project: "VetrinaLive",
    year: "2020-2022",
    results: "Design system completo, gestione store end-to-end",
    roles: "UI/UX Designer",
    about:
      "E-commerce builder senza commissioni con dashboard KPI, gestione catalogo e personalizzazione guidata.",
    images: [
      "/images/projects/vetrinalive-01.jpg",
      "/images/projects/vetrinalive-02.jpg",
      "/images/projects/vetrinalive-03.jpg",
    ],
  },
];

export const Work = () => {
  return (
    <section className="prose h-full">
      <SectionHeader kicker="Selected" title="Work" subtitle={undefined} align="left" variant="underline" />
      <div className="mt-10 space-y-28">
        {projects.map((p, index) => (
          <SingleWork
            key={`${p.project}-${index}`}
            project={p.project}
            year={p.year}
            results={p.results}
            roles={p.roles}
            about={p.about}
            images={p.images}
          />
        ))}
      </div>
      <div className="mt-12">
        <a href="/works" className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4">
          View more
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </section>
  );
};
