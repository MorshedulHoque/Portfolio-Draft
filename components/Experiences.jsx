import { workExperienceData } from "@/data/data";
import { IoBriefcaseOutline } from "react-icons/io5";
import Experience from "./Experience";

export default function Experiences() {
  return (
    <div className="wrapper ">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* work experience */}
        <div className="col-span-3 space-vertical">
          <div className="flex items-center gap-2 ">
            <IoBriefcaseOutline size={24} />
            <span className="font-semibold">Work Experience</span>
          </div>

          {workExperienceData.map((data) => (
            <Experience data={data} key={data.id} />
          ))}
        </div>

        {/* Blog */}
        {/* <>
          <Blog />
        </> */}
      </div>
    </div>
  );
}
