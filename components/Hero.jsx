import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import HeroImage from "../public/taib-islam-color-blue.png";

export default function Hero() {
  return (
    <div className="wrapper lg:py-24 mt-24">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="space-v flex-1">
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Taib Islam
              <span className="text-[#00E5A4]">_</span>
            </h1>
            <h2 className="text-xl lg:text-3xl">Software Engineer</h2>
          </div>
          <p className="lg:text-2xl">
            I&apos;m a front-end developer passionate about building accessible
            web apps that users love.
          </p>

          <div className="flex gap-5">
            <FaLinkedin size={30} />
            <FaGithub size={30} />
            <FaFacebook size={30} />
            <SiLeetcode size={30} />
            <FaMedium size={30} />
          </div>
        </div>

        <div
          className="flex-1  flex items-end justify-end"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <Image
            className="rounded-full"
            src={HeroImage}
            alt="Taib Islam"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
