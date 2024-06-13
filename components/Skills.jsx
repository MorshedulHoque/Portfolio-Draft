import { techLogo } from "@/data/data";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="wrapper space-v" id="skills ">
      <h2 className="text-2xl font-medium border-b border-[#3C4B55] pb-2">
        Skills
      </h2>

      <h2 className="text-xl lg:text-3xl max-w-lg text-center mx-auto">
        Most technologies that i have work in production and development
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {techLogo.map((data) => (
          <div
            key={data.id}
            className="bg-white shadow p-4 h-[110px] w-[150px] flex flex-col justify-center items-center rounded-2xl"
          >
            <div className="size-16 relative">
              <Image
                className="object-contain"
                src={`${data.srcUrl}`}
                alt={`${data.name}`}
                fill
                draggable={false}
              />
            </div>
            <p className="mt-2 text-sm font-semibold">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
