import Project from "@/components/Project";
import { projectsData } from "@/data/data";

export default function Portfolio() {
  return (
    <div className="wrapper-lg lg:py-24 mt-8">
      <h2 className="text-2xl mb-10 font-medium border-b border-gray-800 pb-2">
        Projects
      </h2>
      <p className="font-semibold mb-3">
        Real-Life Project with Extensive User Engagement
      </p>
      <p className="max-w-2xl text-secondary">
        This page showcases a project I have developed, which is actively used
        by a wide user base. It highlights my practical experience and ability
        to create impactful solutions that meet real-world needs.
      </p>
      {projectsData.map((data) => (
        <Project data={data} key={data?.id} />
      ))}
    </div>
  );
}
