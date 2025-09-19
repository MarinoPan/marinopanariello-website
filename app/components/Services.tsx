"use client";

import { SectionHeader } from "./SectionHeader";

export const Services = () => {
  const items = [
    {
      title: "Product Design",
      desc: "Strategy, research, UX flows, UI and delivery. From idea to shipped product.",
    },
    {
      title: "Design System",
      desc: "Tokens, components, accessibility and documentation for scalable teams.",
    },
    {
      title: "Websites",
      desc: "Fast, SEO‑friendly websites and landing pages with modern stacks.",
    },
    {
      title: "Web & Mobile Apps",
      desc: "Dashboards, CRMs, internal tools and mobile apps (React Native).",
    },
  ];

  return (
    <section className="prose h-full">
      <SectionHeader
        kicker="My"
        title="Services"
        subtitle="What can i do"
        align="left"
        variant="underline"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="h-full flex flex-col justify-between pr-6"
          >
            <h4 className="text-2xl m-0 leading-tight">{it.title}</h4>
            <p className="text-primary/70 m-0 mt-3 text-base leading-relaxed">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
