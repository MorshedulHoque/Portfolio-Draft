import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaMedium } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#000E38] text-white">
      <div className="flex justify-between wrapper p-20">
        <div className="col-span-1">Taib Islam</div>
        <div className="col-span-2">
          <div className="flex gap-5">
            <FaLinkedin size={30} />
            <FaGithub size={30} />
            <FaFacebook size={30} />
            <SiLeetcode size={30} />
            <FaMedium size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
