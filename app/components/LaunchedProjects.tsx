"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

type Project = {
    slug: string;
    title: string;
    description: string;
    link: string;
    image: string;
    status?: "live" | "coming_soon";
};

const projects: Project[] = [
    {
        slug: "fiabe-magiche",
        title: "Fiabe Magiche",
        description:
            "Mobile app to create AI-powered bedtime stories with text, images, and narration.",
        link: "/works#fiabe-magiche",
        image: "/images/projects/docsity-1-after.jpg", // placeholder until assets are ready
        status: "coming_soon",
    },
    {
        slug: "f1livestats",
        title: "F1 Live Stats",
        description:
            "Real-time telemetry dashboard for Formula 1 sessions.",
        link: "/works#f1livestats",
        image: "/images/projects/docsity-2-after.jpg", // temporary placeholder
        status: "live",
    },
    {
        slug: "fabloo",
        title: "Fabloo",
        description:
            "Management platform for animation agencies.",
        link: "/works#fabloo",
        image: "/images/projects/vetrinalive-01.jpg", // temporary placeholder
        status: "live",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const LaunchedProjects = () => {
    return (
        <section className="prose h-full">
            <SectionHeader kicker="My" title="Projects" subtitle="Real products I shipped" align="left" variant="underline" />
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
            >
                {projects.map((p) => (
                    <motion.article
                        key={p.slug}
                        variants={item}
                        className="group relative overflow-hidden"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <Image
                                src={p.image}
                                alt={`${p.title} cover`}
                                fill
                                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                            />
                            {p.status === "coming_soon" && (
                                <div className="absolute left-3 top-3 inline-flex items-center gap-2 bg-background/90 shadow-sm px-2 py-0.5 text-xs font-medium text-primary/70">
                                    <span className="inline-block h-1.5 w-1.5 bg-gray-dark" />
                                    Coming soon
                                </div>
                            )}
                        </div>
                        <div className="p-4 flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <h3 className="text-2xl m-0 leading-snug">{p.title}</h3>
                                <span className="text-xs uppercase tracking-wide text-secondary">
                                    {p.status === "live" ? "Live" : "Draft"}
                                </span>
                            </div>
                            <p className="m-0 text-primary/70">{p.description}</p>
                            <div className="pt-2">
                                <a
                                    href={p.link}
                                    target={p.link.startsWith("http") ? "_blank" : undefined}
                                    rel={p.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    aria-label={`Open ${p.title}`}
                                    className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
                                >
                                    {p.status === "coming_soon" ? "Preview" : "Visit"}
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
};
