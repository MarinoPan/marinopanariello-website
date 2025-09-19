import { SectionHeader } from "app/components/SectionHeader";
import { SingleWork } from "app/components/SingleWork";

const launchedSlugs = new Set(["fiabe-magiche", "f1livestats", "fabloo"]); // avoid duplication in Design Projects

const websites = [
  { name: "studyaway.it", link: "https://studyaway.it/" },
  { name: "verteego.it", link: "https://verteego.it/" },
  { name: "bblux.co.uk", link: "https://bblux.co.uk/" },
  { name: "uconsulting.co.uk", link: "https://uconsulting.co.uk/" },
  { name: "attivazioneveloce.it", link: "https://attivazioneveloce.it/" },
  { name: "toniatramontano.com", link: "https://toniatramontano.com/" },
  { name: "sa-bo.it", link: "https://sa-bo.it/" },
  {
    name: "studiodentisticocarlomenzione.it",
    link: "https://studiodentisticocarlomenzione.it/",
  },
  { name: "autonoleggiosiva.it", link: "https://autonoleggiosiva.it/" },
  { name: "fabloo.it", link: "https://fabloo.it/" },
  { name: "lapupazzeria.it", link: "https://lapupazzeria.it/" },
  { name: "turrisunited.it", link: "https://turrisunited.it/" },
];

export const metadata = {
  title: "Works",
  description: "All projects, case studies and websites I developed.",
};

export default function Page() {
  // Elenco completo dei lavori (Design + My Projects), nessun "websites developed" qui
  const works = [
    {
      project: "Docsity",
      year: "lug 2022 - oggi",
      results:
        "+137% visualizzazioni documento; +56% nuovi upload; +43% ricavi ricorrenti",
      roles: "Product Designer · Roma, Italia",
      about:
        "Ho guidato il redesign di dashboard, homepage, flusso di upload e landing Docsity AI, introducendo un modello di documentazione condiviso e sviluppando le pagine chiave in Next.js partendo dal design system.",
      images: [
        "/images/projects/docsity-1-after.jpg",
        "/images/projects/docsity-2-after.jpg",
        "/images/projects/docsity-3-after.jpg",
      ],
    },
    {
      project: "Rosmariano",
      year: "2020-2021",
      results: "Economia play-to-earn con wallet crypto e skill tree",
      roles: "UI/UX Designer",
      about:
        "Esperienza gaming su blockchain che collega azioni virtuali e iniziative sostenibili reali, con mappe interattive e progressione a skill.",
      images: [
        "/images/projects/rosmariano-01.jpg",
        "/images/projects/rosmariano-02.jpg",
        "/images/projects/rosmariano-03.jpg",
      ],
    },
    {
      project: "Diagnostic Biochips",
      year: "2018-2020",
      results: "Suite desktop+web, +83% efficienza nel trattamento dati",
      roles: "UI/UX Designer",
      about:
        "Interfacce modulari per laboratori neuroscientifici con dashboard configurabili, viste Cluster/Waveform e automazioni data-driven.",
      images: [
        "/images/projects/labbox-1-after.jpg",
        "/images/projects/labbox-2.jpg",
      ],
    },
    {
      project: "VetrinaLive",
      year: "2020-2022",
      results: "Design system completo, gestione store end-to-end",
      roles: "UI/UX Designer",
      about:
        "E-commerce builder senza commissioni con dashboard KPI, gestione catalogo, ordini e personalizzazione guidata dello shop.",
      images: [
        "/images/projects/vetrinalive-01.jpg",
        "/images/projects/vetrinalive-02.jpg",
        "/images/projects/vetrinalive-03.jpg",
        "/images/projects/vetrinalive-04.jpg",
      ],
    },
    {
      project: "F1 Live Stats",
      year: "2024",
      results: "Live telemetry dashboard",
      roles: "Product Design, Web",
      about: "Real-time telemetry for Formula 1 sessions.",
      images: ["/images/projects/f1livestats.png"],
      link: "https://www.f1livestats.com/",
      linkLabel: "Visit website",
    },
    {
      project: "Fabloo",
      year: "2023",
      results: "Agency management platform",
      roles: "Product Design, Web",
      about: "Bookings, teams and scheduling for animation agencies.",
      images: ["/images/projects/fabloo.png"],
      link: "https://www.fabloo.it/",
      linkLabel: "Visit website",
    },
    {
      project: "Fiabe Magiche",
      year: "2025",
      results: "AI-powered stories",
      roles: "Product Design, Mobile",
      about:
        "Mobile app to generate bedtime stories with text, images and narration.",
      images: ["/images/projects/fiabe-magiche.jpg"],
      link: "https://apps.apple.com/it/app/fiabe-magiche/id6749779625",
      linkLabel: "Download app",
    },
  ] as const;

  return (
    <section className="prose h-full px-2 sm:px-4 md:px-0">
      <SectionHeader
        kicker="All"
        title="Works"
        subtitle="Design projects and my products"
        align="left"
        variant="underline"
      />
      <div className="mt-10 space-y-28">
        {works.map((w, idx) => (
          <SingleWork key={`${w.project}-${idx}`} {...w} />
        ))}
      </div>
    </section>
  );
}
