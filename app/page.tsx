import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { LaunchedProjects } from "./components/LaunchedProjects";
import { WorksWall } from "./components/WorksWall";
import { SitesDeveloped } from "./components/SitesDeveloped";
import { Services } from "./components/Services";

export default function Page() {
  return (
    <div className="flex flex-col gap-28">
      <Hero />
      <SitesDeveloped showHeader={false} />
      <LaunchedProjects />
      <Services />
      <Work />
    </div>
  );
}
