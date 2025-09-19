import type { Metadata } from "next";
import { SectionHeader } from "../components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Marino Panariello is a design engineer who leads product teams from concept to launch with a blend of strategy, UX, and front-end craft.",
};

const principles = [
  {
    title: "People first",
    description:
      "Every project starts with listening and qualitative research. I translate complex problems into clear journeys that respect user needs and context.",
  },
  {
    title: "Scalable systems",
    description:
      "Modular design systems, governance, and documentation: I build shared foundations that speed up teams and keep product experiences consistent.",
  },
  {
    title: "Intentional delivery",
    description:
      "I partner with engineers, prototype in code, and turn concepts into accessible, high-performing interfaces ready for production.",
  },
] as const;

const experiences = [
  {
    company: "WeUni by Docsity",
    role: "Product Designer & UX Engineer",
    period: "Jan 2025 — Present",
    highlight:
      "I led the team and designed the application from scratch, building flows and instrumentation that increased qualified daily leads by over 1,200% in just six months.",
    contributions: [
      "Coordinated discovery, UX, and end-to-end development",
      "Designed the information architecture and shared design system across product and engineering",
      "Ran continuous experiments on funnels and analytics to scale acquisition",
    ],
  },
  {
    company: "Docsity",
    role: "Product Designer",
    period: "Jul 2022 — Present",
    highlight:
      "I redesigned the core pages (Dashboard, Upload, Homepage, Docsity AI landing), achieving +137% page views, +43% revenue, and +56% new uploads.",
    contributions: [
      "Overhauled UX and UI of primary touchpoints with a focus on business metrics",
      "Created a documentation model for frictionless developer handoff",
      "Shipped key pages in Next.js using the design system components",
    ],
  },
  {
    company: "Lasting Dynamics",
    role: "UI/UX Designer",
    period: "Feb 2018 — Jul 2022",
    highlight:
      "I led web and mobile projects end to end for SaaS products, e-commerce platforms, and data-driven solutions across international markets.",
    contributions: [
      "Workflow Management System: agile rollout with -30% cycle time and +25% efficiency",
      "E-commerce Builder: modular tool adopted by over one thousand customers",
      "Neuroscience cloud applications with +40% processing speed",
      "Vertical platforms for energy, education, and blockchain-based gaming",
    ],
  },
  {
    company: "Freelance",
    role: "Product Designer & Front-end Partner",
    period: "2018 — Present",
    highlight:
      "I create apps, websites, and e-commerce experiences across industries, combining research, design, and front-end development to launch solid digital products.",
    contributions: [
      "End-to-end paths: user research, flows, wireframes, prototypes, and UI development",
      "Lightweight design systems and component kits for in-house teams and agencies",
      "Ongoing support to startups and SMEs on optimization, measurement, and iteration",
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
              I design products that connect strategic vision, design systems,
              and fast shipping.
            </h1>
          </div>
          <div className="col-span-12">
            <p className="m-0 text-base leading-relaxed text-primary/75 sm:text-lg">
              From the first workshop to release, I partner with cross-functional
              teams to define priorities, craft essential interfaces, and build
              processes that last. I move seamlessly between design and code to
              keep the product coherent and measurable.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <SectionHeader kicker="Experience" title="Professional journey" />
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
              kicker="Let's collaborate"
              title="What we can build together"
            />
          </div>
          <div className="col-span-12 flex flex-col gap-4 lg:col-span-4">
            <a
              href="mailto:hello@marinopanariello.com"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-primary/90"
            >
              Email me
            </a>
            <p className="m-0 text-sm leading-relaxed text-primary/70">
              Prefer a call? We can review needs, constraints, and outline a
              shared plan within the next 48 hours.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
