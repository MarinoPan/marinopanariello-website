import Image from "next/image";

export const WorksWall = () => {
    return (
        <section className="prose h-full">
            <h2>A couple of projects</h2>
            <Image
                src={"/images/wall-projects.png"}
                alt="All Projects of Marino Panariello"
                width={1920}
                height={4000}
            />
        </section>
    );
};
