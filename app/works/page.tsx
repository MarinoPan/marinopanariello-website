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
  // Full list of case studies and personal projects; exclude "websites developed" here
  const works = [
    {
      project: "Docsity",
      year: "Jul 2022 – Present",
      results:
        "+137% document views; +56% new uploads; +43% recurring revenue",
      roles: "Product Designer · Rome, Italy",
      about:
        "I led the redesign of the dashboard, homepage, upload flow, and Docsity AI landing, introducing a shared documentation model and shipping key pages in Next.js starting from the design system.",
      images: [
        "/images/projects/docsity-1-after.jpg",
        "/images/projects/docsity-2-after.jpg",
        "/images/projects/docsity-3-after.jpg",
      ],
    },
    {
      project: "Rosmariano",
      year: "2020-2021",
      results: "Play-to-earn economy with crypto wallet and skill tree",
      roles: "UI/UX Designer",
      about:
        "Blockchain gaming experience that connects virtual farming with real sustainability initiatives, featuring interactive maps and skill-based progression.",
      images: [
        "/images/projects/rosmariano-01.jpg",
        "/images/projects/rosmariano-02.jpg",
        "/images/projects/rosmariano-03.jpg",
      ],
    },
    {
      project: "Diagnostic Biochips",
      year: "2018-2020",
      results: "Desktop + web suite, +83% efficiency in data processing",
      roles: "UI/UX Designer",
      about:
        "Modular interfaces for neuroscience labs with configurable dashboards, Cluster/Waveform views, and data-driven automations.",
      images: [
        "/images/projects/labbox-1-after.jpg",
        "/images/projects/labbox-2.jpg",
      ],
    },
    {
      project: "VetrinaLive",
      year: "2020-2022",
      results: "Full design system and end-to-end store management",
      roles: "UI/UX Designer",
      about:
        "Commission-free e-commerce builder with KPI dashboards, catalog management, orders, and guided shop personalization.",
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
