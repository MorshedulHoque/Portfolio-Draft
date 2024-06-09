import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { LuMail, LuPhone } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <div className="bg-[#000E38] text-white">
      <div className="flex lg:flex-row flex-col justify-between wrapper py-10 lg:p-20 gap-10 lg:gap-40">
        <div className="grow">
          <div className="mb-2">
            <h2 className="font-semibold">Taib Islam</h2>
            <p className="font-light">Software Engineer</p>
          </div>

          <div className="flex items-center gap-2">
            <LuMail size={20} />
            <span className="font-light">mailtaibislam@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <LuPhone size={20} />
            <span className="font-light">01675884882</span>
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="font-semibold mb-2">Main</h2>
          <div className="flex flex-col gap-5">
            <Link className="flex items-center gap-2 hover:underline" href="#">
              <span className="flex items-center">
                Online Resume{" "}
                <FiArrowUpRight className="ml-1 inline-block" size={18} />
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="font-semibold mb-2">Contact</h2>
          <div className="flex flex-col gap-5">
            <Link className="flex items-center gap-2 hover:underline" href="#">
              <FaLinkedin size={30} />
              <span className="flex items-center">
                Linkedin{" "}
                <FiArrowUpRight className="ml-1 inline-block" size={18} />
              </span>
            </Link>

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
