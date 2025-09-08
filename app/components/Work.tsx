import { SingleWork } from "./SingleWork";

const projects = [
    {
        project: "Docsity",
        year: "2014",
        results:
            "Increased user engagement by 30% and reduced bounce rate by 20%.",
        roles: "UX/UI Designer, Frontend Developer",
        about: "Docsity is a social learning platform that connects students and teachers. I worked on the redesign of the platform, focusing on improving the user experience and interface.",
    },
    {
        project: "Project 2",
        year: "2015",
        results:
            "Improved conversion rate by 25% and reduced load time by 15%.",
        roles: "UX/UI Designer, Frontend Developer",
        about: "Project 2 is a web application that helps users manage their tasks. I was responsible for the design and development of the user interface.",
    },
];

export const Work = () => {
    return (
        <section className="prose h-full">
            <h2>Selected Work</h2>
            {projects.map((project, index) => (
                <SingleWork
                    project="Docsity"
                    year="2014"
                    results="Increased user engagement by 30% and reduced bounce rate by 20%."
                    roles="UX/UI Designer, Frontend Developer"
                    about="Docsity is a social learning platform that connects students and teachers. I worked on the redesign of the platform, focusing on improving the user experience and interface."
                />
            ))}
            ;
        </section>
    );
};
