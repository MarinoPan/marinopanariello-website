"use client";
import { SingleWork } from "./SingleWork";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    project: "Docsity",
    year: "Jul 2022 – Present",
    results: "+137% document views; +56% new uploads; +43% recurring revenue",
    roles: "Product Designer · Rome, Italy",
    about:
      "I redesigned the dashboard, homepage, upload flow, and Docsity AI landing, introducing a shared documentation model and shipping key pages directly in Next.js with the design system.",
    images: [
      "/images/projects/docsity-1-after.jpg",
      "/images/projects/docsity-2-after.jpg",
      "/images/projects/docsity-3-after.jpg",
    ],
  },
  {
    project: "Lasting Dynamics",
    year: "Feb 2018 – Jul 2022",
    results: "-30% cycle time; +25% team efficiency; 1k+ stores launched",
    roles: "UI/UX Designer · Naples (IT) & LPA (ES)",
    about:
      "I led end-to-end web and mobile projects, from research to testing, across workflow management, e-commerce builders, neuroscience platforms, and tailored CRMs.",
    images: [
      "/images/projects/coraly-01.jpg",
      "/images/projects/coraly-02.jpg",
      "/images/projects/coraly-03.jpg",
    ],
  },
  {
    project: "VetrinaLive",
    year: "2020-2022",
    results: "Full design system and end-to-end store management",
    roles: "UI/UX Designer",
    about:
      "Commission-free e-commerce builder with KPI dashboards, catalog management, and guided personalization.",
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
      <SectionHeader
        kicker="Selected"
        title="Work"
        subtitle={undefined}
        align="left"
        variant="underline"
      />
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
        <a
          href="/works"
          className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
        >
          View more
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
