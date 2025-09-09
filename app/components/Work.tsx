"use client";
import { SingleWork } from "./SingleWork";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    project: "Docsity",
    year: "2021",
    results: "+30% engagement, -20% bounce",
    roles: "Product Design, Frontend",
    about:
      "Redesign of the learning platform with improved IA, design system and modern frontend.",
    images: [
      "/images/projects/docsity-1-after.jpg",
      "/images/projects/docsity-2-after.jpg",
      "/images/projects/docsity-3-after.jpg",
    ],
  },
  {
    project: "Coraly",
    year: "2022",
    results: "Design System foundations",
    roles: "Design Lead",
    about:
      "Built a scalable DS covering components, theming and guidelines.",
    images: [
      "/images/projects/coraly-01.jpg",
      "/images/projects/coraly-02.jpg",
      "/images/projects/coraly-03.jpg",
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
