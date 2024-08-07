import Project from "@/components/Project";
import { projectsData } from "@/data/data";
import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function Portfolio() {
  return (
    <div className="wrapper-lg lg:py-24 mt-8">
      <div className="w-full border-b border-gray-800 mb-10 ">
        <Link href="/" className="w-min inline-block group">
          <h2 className="text-2xl font-medium flex items-center gap-2.5 pb-2">
            <IoArrowBackCircleOutline
              size={34}
              className="group-hover:scale-125 transition"
            />
            Projects
          </h2>
        </Link>
      </div>

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
