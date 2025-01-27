"use client";
import { fadeInUp } from "@/utils/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Project({ data }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="whileInView"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <Link
        href={data?.url}
        target="_blank"
        className="grid grid-cols-1 md:grid-cols-5 md:gap-8 group mt-10"
      >
        <div className="flex space-vertical flex-col w-full p-4 py-10 lg:p-10 col-span-2 justify-between items-start border border-gray-800 group-hover:border-gray-500 transition duration-200 ease-in-out lg:rounded-3xl bg-[#12172A]">
          <div>
            <span>WORK</span>

            <h2 className="text-2xl mt-8 lg:text-5xl font-normal decoration-2 !leading-tight max-w-sm transition group-hover:underline">
              {data?.title}
            </h2>

            <p className="my-8 text-secondary">{data?.description}</p>

            <div className="flex gap-5 mt-4 whitespace-nowrap flex-wrap">
              {data?.techStack?.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-violet-500 px-5 py-2 rounded-full flex items-center gap-2.5"
                >
                  {tech?.icon && (
                    <div className="bg-white p-1 rounded-full flex items-center justify-center relative size-10">
                      <Image
                        src={tech?.icon}
                        className="object-contain"
                        alt="NEXT_JS_LOGO"
                        width={28}
                        height={28}
                        draggable={false}
                      />
                    </div>
                  )}
                  {tech?.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <button className="arrow-button">
              Visit Website<span className="arrow"></span>
            </button>
          </div>
        </div>

        <div className="relative w-full h-[350px] lg:h-full col-span-3 overflow-hidden lg:rounded-3xl">
          <Image
            src={data?.imageSrc}
            className="object-cover object-right transition delay-0 duration-300 ease-in-out group-hover:scale-105"
            alt={data?.imageAlt}
            fill
            draggable={false}
          />
        </div>
      </Link>
    </motion.div>
  );
}
