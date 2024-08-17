"use client";
import content from "@/data/content.json";
import { socialLinks } from "@/data/data";
import { fadeInLeft, fadeInRight } from "@/utils/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../public/utsho-dp.jpg";

export default function Hero() {
  return (
    <div className="wrapper lg:py-24 mt-28">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <motion.div
          className="space-vertical flex-1"
          initial="hidden"
          animate="visible"
          variants={fadeInLeft}
        >
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              A S M Morshedul Hoque (Utsho)
              <span className="text-highlight">_</span>
            </h1>
            <h2 className="text-xl lg:text-3xl">Data Enthusiast</h2>
          </div>
          <p className="lg:text-xl">{content.hero.description}</p>

          <div className="flex gap-5">
            {socialLinks.map((data) => (
              <Link
                className="hover:scale-125 transition"
                key={data?.id}
                href={data?.href}
                target="_blank"
                rel="noreferrer"
              >
                {data?.icon}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex items-end justify-end"
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
        >
          <Image
            className="rounded-full"
            src={HeroImage}
            alt="A S M Morshedul Hoque (Utsho)"
            width={300}
            height={300}
            draggable={false}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
