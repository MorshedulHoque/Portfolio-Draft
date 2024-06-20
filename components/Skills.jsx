import { techLogo } from "@/data/data";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="wrapper space-v pb-28" id="skills">
      <h2 className="text-2xl font-medium border-b border-gray-800 pb-2">
        Skills
      </h2>

      <h2 className="text-xl lg:text-3xl max-w-lg text-center mx-auto text-secondary">
        Most technologies that I have work in production and development
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {techLogo?.map((data, i) => (
          <div
            key={i}
            className="bg-[#11152C] transition hover:scale-110 duration-200 ease-in-out border border-gray-800 hover:border-gray-500 p-4 h-[110px] w-[150px] flex flex-col justify-center items-center rounded-2xl"
          >
            <div className="size-16 relative">
              <Image
                className="object-contain"
                src={`${data.srcUrl}`}
                alt={`${data?.name}`}
                fill
                draggable={false}
              />
            </div>

            <p className="mt-2 text-sm font-semibold text-secondary">
              {data?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
