"use client";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export const WorksWall = () => {
    return (
        <section className="prose h-full">
            <SectionHeader kicker="Gallery" title="Highlights" subtitle={undefined} align="center" variant="none" />
            <Image
                src={"/images/wall-projects.png"}
                alt="All Projects of Marino Panariello"
                width={1920}
                height={4000}
            />
        </section>
    );
};
