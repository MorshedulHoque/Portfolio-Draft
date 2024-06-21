import { socialLinks } from "@/data/data";
import { MEDIUM_URL, RESUME_URL } from "@/data/links";
import getCurrentYear from "@/utils/getCurrentYear";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";

export default function Footer() {
  return (
    <div className="border-t border-gray-800 ">
      <div className="flex lg:flex-row flex-col justify-between wrapper py-10 lg:p-20 gap-10 lg:gap-40">
        <div className="grow space-y-1">
          <div className="mb-3">
            <h2 className="text-xl">Taib Islam</h2>
            <p className="font-light">Web Developer</p>
          </div>

          <div className="flex items-center gap-2">
            <IoLocationOutline size={20} />
            <span className="font-light ">Motijheel, Dhaka.</span>
          </div>
          <div className="flex items-center gap-2">
            <LuMail size={20} />
            <span className="font-light ">mailtaibislam@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <LuPhone size={20} />
            <span className="font-light ">01675884882</span>
          </div>
        </div>

        <div className="">
          <h2 className="font-semibold mb-3 text-[#00E5A4]">Main</h2>
          <div className="flex flex-col gap-5">
            <Link
              className="flex items-center gap-2 hover:underline"
              href={RESUME_URL}
              target="_blank"
            >
              <span className="flex items-center">
                Resume{" "}
                <FiArrowUpRight className="ml-1 inline-block" size={18} />
              </span>
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline"
              href="#projects"
            >
              <span className="flex items-center">Projects</span>
            </Link>
            <Link
              className="flex items-center gap-2 hover:underline"
              href={MEDIUM_URL}
              target="_blank"
            >
              <span className="flex items-center">
                Blog <FiArrowUpRight className="ml-1 inline-block" size={18} />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <h2 className="font-semibold mb-3 text-[#00E5A4]">Contact</h2>
          <div className="flex flex-col gap-5">
            {socialLinks.map((data) => (
              <Link
                className="flex items-center gap-2 hover:underline"
                href={data?.href}
                key={data?.id}
                target="_blank"
              >
                {data?.icon}
                <span className="flex items-center">
                  {data?.name}{" "}
                  <FiArrowUpRight className="ml-1 inline-block" size={18} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-10 text-center border-t border-gray-800 wrapper">
        <p>
          Designed & Developed with ❤️ by{" "}
          <Link href="/" className="hover:underline">
            Taib Islam Dipu.
          </Link>
        </p>
        <p>
          &copy; <span>{getCurrentYear()}</span> All rights reserved.
        </p>
      </div>
    </div>
  );
}
