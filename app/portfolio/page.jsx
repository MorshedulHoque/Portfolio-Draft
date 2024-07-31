import Project from "@/components/Project";
import { projectsData } from "@/data/data";

export default function Portfolio() {
  return (
    <div className="wrapper-lg lg:py-24 mt-28">
      <h2 className="text-2xl mb-10 font-medium border-b border-gray-800 pb-2">
        Projects
      </h2>
      {projectsData.map((data) => (
        <Project data={data} key={data?.id} />
      ))}
    </div>
  );
}
