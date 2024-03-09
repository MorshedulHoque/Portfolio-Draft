import HeroImage from "../public/taib-islam-color-blue.png";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="wrapper">
      <div className="flex items-center justify-center gap-5 h-screen">
        <div className="space-y-10 flex-1 animate__animated animate__fadeInUp animate__slow-1s">
          <div>
            <h1 className="text-7xl font-bold leading-tight">
              Taib Islam
              <span className="text-[#00E5A4]">_</span>
            </h1>
            <h2 className="text-4xl leading-tight">Software Engineer</h2>
          </div>
          <p className="text-2xl">
            I&apos;m a front-end developer passionate about building accessible
            web apps that users love.
          </p>

          <div className="flex gap-3">
            <FaFacebook size={23} />
            <FaLinkedin size={23} />
            <FaGithub size={23} />
            <SiLeetcode size={23} />
            <FaMedium size={23} />
          </div>

          {/* <button>view project</button> */}
        </div>

        <div
          className="flex-1  flex items-end justify-end animate__animated animate__zoomIn animate__slow"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <Image
            className="rounded-full"
            src={HeroImage}
            alt="Taib Islam"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
