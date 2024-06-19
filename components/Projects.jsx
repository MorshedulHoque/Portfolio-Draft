import { projectsData } from "@/data/data";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="wrapper-lg space-y-10" id="projects">
      <h2 className="text-2xl font-medium border-b border-[#3C4B55] pb-2">
        Projects
      </h2>

      {projectsData?.map((data) => (
        <Project data={data} key={data?.id} />
      ))}
    </div>
  );
}
