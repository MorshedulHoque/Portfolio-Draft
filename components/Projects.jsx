import { projectsData } from "@/data/data";
import Link from "next/link";
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

      <div className="mt-10 flex justify-center">
        <Link href="/portfolio" target="_blank" className="underline">
          View All
        </Link>
      </div>
    </div>
  );
}
