import Image from "next/image";
import Project from "./Project";
import BZMImage from "../public/images/bzm.png";

export default function Projects() {
  return (
    <div className="wrapper-lg space-y-10">
      <h2 className="text-2xl font-bold border-b border-[#3C4B55] pb-2">
        Projects
      </h2>

      {/* <div className="grid grid-cols-2 gap-10">
        <div className="bg-black p-4 space-lg">
          <div className="h-[350px] bg-gray-100">video</div>
          <div className="space-lg">
            <div>
              <h3 className="text-base lg:text-2xl font-bold text-white">
                BZM Graphics
              </h3>

              <a
                className="hover:underline flex gap-x-2 items-center transition text-white hover:text-secondary"
                href="#"
                title="Visit Website"
              >
                VISIT WEBSITE
              </a>
            </div>
            <div className="flex gap-5 whitespace-nowrap flex-wrap justify-center lg:justify-start text-white ">
              <span>Next.js</span>
              <span>Next.js</span>
              <span>Next.js</span>
              <span>Next.js</span>
            </div>
          </div>
        </div>
        <div className="bg-black p-4 space-lg">
          <div className="h-[350px] bg-gray-100">video</div>
          <div className="space-lg">
            <div>
              <h3 className="text-base lg:text-2xl font-bold text-white">
                Creative Studio
              </h3>

              <a
                className="hover:underline flex gap-x-2 items-center transition text-white hover:text-secondary"
                href="#"
                title="Visit Website"
              >
                VISIT WEBSITE
              </a>
            </div>
            <div className="flex gap-5 whitespace-nowrap flex-wrap justify-center lg:justify-start text-white ">
              <span>Next.js</span>
              <span>Next.js</span>
              <span>Next.js</span>
              <span>Next.js</span>
            </div>
          </div>
        </div>
      </div> */}

      <div className="h-auto lg:grid grid-cols-5">
        <div className="flex flex-col p-10  col-span-2 justify-between items-start bg-[#D6E6FF]">
          <div className="">
            <span>WORK</span>

            <h2 className="text-2xl mt-8 lg:text-5xl font-normal !leading-tight max-w-sm">
              Visual Contents for E-Commerce & Brands
            </h2>

            <div className="flex gap-5 mt-4 whitespace-nowrap flex-wrap justify-center lg:justify-start">
              <span className="border-color2 border px-3 py-1 rounded-full">
                Next.js
              </span>
              <span className="border-color2 border px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
              <span className="border-color2 border px-3 py-1 rounded-full">
                Localization
              </span>
            </div>
          </div>

          <div>
            <button className="arrow-button">
              Visit Website<span className="arrow"></span>
            </button>
          </div>
        </div>

        <div className="col-span-3">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/934lDmbOlM4?si=zTgf1Yx5Ii0617Lp"
          ></iframe>
        </div>

        {/* <div className="relative w-full h-full">
          <Image
            src={BZMImage}
            className="object-contain"
            alt="bzm graphics"
            fill
          />
        </div> */}
      </div>

      <div className="h-auto lg:grid grid-cols-5">
        <div className="col-span-3">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/7fLObh3SGn8?si=KcXcq6dZCSo3cZQ6"
          ></iframe>
        </div>

        <div className="flex flex-col p-10 space-lg col-span-2 justify-between items-start bg-[#DDCAFF]">
          <div className="space-lg">
            <span>WORK</span>
            <h2 className="text-2xl lg:text-5xl font-normal !leading-tight max-w-sm">
              Visual Contents for E-Commerce & Brands
            </h2>
          </div>

          <div>
            <button className="arrow-button">
              Visit Website<span className="arrow"></span>
            </button>
          </div>
        </div>

        {/* <div className="relative w-full h-full">
          <Image
            src={BZMImage}
            className="object-contain"
            alt="bzm graphics"
            fill
          />
        </div> */}
      </div>
    </div>
  );
}
