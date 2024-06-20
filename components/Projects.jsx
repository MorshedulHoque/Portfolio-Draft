import { projectsData } from "@/data/data";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="wrapper-lg" id="projects">
      <h2 className="text-2xl mb-10 font-medium border-b border-gray-800 pb-2">
        Projects
      </h2>

      {projectsData?.map((data) => (
        <Project data={data} key={data?.id} />
      ))}
    </div>
  );
}
