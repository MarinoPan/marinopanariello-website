"use client";

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
      <h2 className="m-0">Services</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.title} className="h-full border border-gray-light/70 p-6 flex flex-col justify-between">
            <h3 className="text-2xl m-0 leading-tight">{it.title}</h3>
            <p className="text-primary/70 m-0 mt-3 text-base leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
