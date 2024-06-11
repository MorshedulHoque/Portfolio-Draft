import { BZM_GRAPHICS_URL, OJIEAME_URL } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import BZMImage from "../public/images/bzm.png";
import OjieameImage from "../public/images/ojieame.webp";

export default function Projects() {
  return (
    <div className="wrapper-lg space-y-10" id="projects">
      <h2 className="text-2xl font-medium border-b border-[#3C4B55] pb-2">
        Projects
      </h2>

      {/* work */}
      <div>
        <Link
          href={BZM_GRAPHICS_URL}
          target="_blank"
          className="h-[550px] lg:grid grid-cols-5 gap-10 group"
        >
          <div className="flex space-v flex-col p-10 col-span-2 justify-between items-start bg-[#D6E6FF]">
            <div className="">
              <span>WORK</span>

              <h2 className="text-2xl mt-8 lg:text-5xl font-normal decoration-2 !leading-tight max-w-sm transition group-hover:underline">
                bZm Graphics
              </h2>

              <p className="my-8">
                bZm Graphics Ltd. is a Visual Content Retouching Company for
                E-commerce, Studios and Brands.
              </p>

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

          <div className="relative w-full h-[350px] lg:h-full col-span-3 overflow-hidden">
            <Image
              src={BZMImage}
              className="object-cover object-right transition delay-0 duration-300 ease-in-out group-hover:scale-105"
              alt="bzm graphics"
              fill
            />
          </div>
        </Link>
      </div>

      {/* work */}
      <div>
        <Link
          href={OJIEAME_URL}
          target="_blank"
          className="h-[550px] lg:grid grid-cols-5 gap-10 group"
        >
          <div className="relative w-full h-[350px] lg:h-full col-span-3 overflow-hidden">
            <Image
              src={OjieameImage}
              className="object-cover transition delay-0 duration-300 ease-in-out group-hover:scale-105"
              alt="OjieameImage"
              fill
            />
          </div>

          <div className="flex flex-col p-10 space-v col-span-2 justify-between items-start bg-[#D6E6FF]">
            <div className="">
              <span>WORK</span>

              <h2 className="text-2xl mt-8 lg:text-5xl font-normal decoration-2 !leading-tight max-w-sm transition group-hover:underline">
                Ojieame
              </h2>

              <p className="my-8">
                A portfolio website for a product designer who wants to showcase
                his works.
              </p>

              <div className="flex gap-5 mt-4 whitespace-nowrap flex-wrap justify-center lg:justify-start">
                <span className="border-color2 border px-3 py-1 rounded-full">
                  React.js
                </span>
                <span className="border-color2 border px-3 py-1 rounded-full">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div>
              <button className="arrow-button">
                Visit Website<span className="arrow"></span>
              </button>
            </div>
          </div>
        </Link>
      </div>

      {/* video  */}
      {/* <div className="h-auto lg:grid grid-cols-5">
        <div className="col-span-3">
          <iframe
            className="w-full aspect-video"
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
      </div> */}
    </div>
  );
}
