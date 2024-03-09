import { techLogo } from "@/data/data";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="wrapper space-y-20" id="skills">
      <h2 className="text-2xl font-bold border-b border-[#3C4B55] pb-2">
        Skills
      </h2>

      <div className="grid grid-cols-4 gap-20 ">
        {techLogo.map((data) => (
          <div
            key={data.id}
            className="w-full h-40 bg-gray-500/[.06] flex gap-4 flex-col items-center justify-center rounded"
          >
            <Image
              className="object-contain"
              src={`${data.srcUrl}`}
              alt={`${data.name}`}
              width={80}
              height={80}
            />
            <p>{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
