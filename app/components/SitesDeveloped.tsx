"use client";
import { useReducedMotion } from "framer-motion";

type Website = { name: string; link: string };

const websites: Website[] = [
    { name: "Fiabe Magiche", link: "/works#fiabe-magiche" },
    { name: "f1livestats.com", link: "https://f1livestats.com" },
    { name: "fabloo.it", link: "https://fabloo.it/" },
    { name: "studyaway.it", link: "https://studyaway.it/" },
    { name: "verteego.it", link: "https://verteego.it/" },
    { name: "bblux.co.uk", link: "https://bblux.co.uk/" },
    { name: "uconsulting.co.uk", link: "https://uconsulting.co.uk/" },
    { name: "attivazioneveloce.it", link: "https://attivazioneveloce.it/" },
    { name: "toniatramontano.com", link: "https://toniatramontano.com/" },
    { name: "sa-bo.it", link: "https://sa-bo.it/" },
    { name: "studiodentisticocarlomenzione.it", link: "https://studiodentisticocarlomenzione.it/" },
    { name: "autonoleggiosiva.it", link: "https://autonoleggiosiva.it/" },
    { name: "lapupazzeria.it", link: "https://lapupazzeria.it/" },
    { name: "turrisunited.it", link: "https://turrisunited.it/" },
];

function Row() {
    return (
        <div className="flex items-center gap-8 pr-8">
            {websites.map((s) => (
                <a
                    key={s.name}
                    className="inline-flex items-center gap-2 px-2 py-1 text-primary hover:underline underline-offset-4 whitespace-nowrap"
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                >
                    <span className="h-1.5 w-1.5 bg-primary/50" aria-hidden="true" />
                    <span className="text-sm leading-none">{s.name}</span>
                </a>
            ))}
        </div>
    );
}

export const SitesDeveloped = ({ showHeader = true }: { showHeader?: boolean }) => {
    const reduce = useReducedMotion();

    return (
        <section className="prose h-full">
            {showHeader ? null : null}
            <div className="relative overflow-hidden">
                <div className="marquee">
                    {reduce ? (
                        <div className="marquee-track static">
                            <Row />
                        </div>
                    ) : (
                        <>
                            <div className="marquee-track">
                                <Row />
                                <Row />
                            </div>
                        </>
                    )}
                </div>
            </div>
            <style jsx>{`
                .marquee {
                    position: relative;
                    overflow: hidden;
                    padding: 4px 0;
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: scroll-left 28s linear infinite;
                    will-change: transform;
                }
                .marquee:hover .marquee-track {
                    animation-play-state: paused;
                }
                .marquee-track.static {
                    animation: none;
                }
                @keyframes scroll-left {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
};
