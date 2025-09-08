import { BackgroundLines } from "./components/BackgroundLines";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { WorksWall } from "./components/WorksWall";

export default function Page() {
    return (
        <div className="flex flex-col gap-14">
            <Hero />
            <WorksWall />
            <Work />
        </div>
    );
}
