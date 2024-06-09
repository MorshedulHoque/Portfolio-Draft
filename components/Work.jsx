import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import NextImage from "./ui/NextImage";

export default function Work() {
  const workExperienceData = [
    {
      id: 1,
      logo: "/codecony.jpg",
      name: "Codecony",
      position: "Frontend Developer",
      timeRange: "Aug 2023 - Present",
      listItems: [
        "Developed and maintained existing web projects using Next.js, enhancing user experiences.",
        "Improved website performance by 20% through best practices in Next.js.",
        "Using Sanity for blog content management.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    },
    {
      id: 2,
      logo: "/letsdunch.jpg",
      name: "Lets Dunch",
      position: "Frontend Developer",
      timeRange: "Jan 2022 - Nov 2022",
      listItems: [
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
        "Lorem ipsum dolor sit amet.",
      ],
      skills: ["Java", "Spring Boot", "SQL", "RESTful APIs", "Git"],
    },
  ];

  return (
    <div className="wrapper ">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* work experience */}
        <div className="col-span-3 space-v">
          <div className="flex items-center gap-2 ">
            <IoBriefcaseOutline size={24} />
            <span className="font-semibold">Work Experience</span>
          </div>

          {/* experience */}
          <div className="flex flex-col lg:flex-row justify-between gap-2.5 ">
            <p className="text-sm text-mute">2023 - Now - 11 Months</p>

            <div className="w-96">
              <Link className="hover:underline" href="#" target="_blank">
                <p className="font-medium">
                  Frontend Developer at Codecony
                  <FiArrowUpRight
                    className="ml-1 inline-block mb-1"
                    size={18}
                  />
                </p>
              </Link>
              <p className="text-mute">Mohammodpur, Dhaka</p>
              <p className="mt-2 text-mute">
                Making mobile apps, games & services for Windows Phone (rip)
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 hidden">
          <div className="flex items-center gap-2 ">
            <LuPencilLine size={24} />
            <span>Recent Blog</span>
          </div>
          {/* blog */}
          <Link href={"#"}>
            <div className="mt-5 mb-10 space-y-3 group">
              <div className="flex gap-20 items-center">
                <NextImage
                  className="rounded-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Medium_logo_Monogram.svg/1200px-Medium_logo_Monogram.svg.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <button className="font-medium border p-2 items-center hidden group-hover:flex gap-2 bg-color2 hover:font-semibold text-white rounded-lg">
                  Read Post <FaExternalLinkAlt />
                </button>
              </div>

              <div className="">
                <h2 className="w-96 font-semibold text-lg">
                  How I designed an app that transforms web text stories into
                  real-time visual novels
                </h2>
              </div>
              <div className="flex w-96 flex-wrap gap-2.5">
                <span className="border-gray-400 p-1 border text-sm rounded">
                  #tech
                </span>
                <span className="border-gray-400 p-1 border text-sm rounded">
                  #tech
                </span>
                <span className="border-gray-400 p-1 border text-sm rounded">
                  #tech
                </span>
              </div>
              <div>
                <p className="max-w-lg">
                  TLDRAn app is designed to transform web text stories into
                  real-time visual novels, addressing the pain points of
                  episodic releases and burnout among creators. It includes
                  features like homepage customization, genre-based
                  recommendations, story information screens, personalized
                  reading experience, and an AI Recap feature.
                </p>
              </div>
            </div>
          </Link>
          {/* blog */}
          <Link href={"#"}>
            <div className="mt-5 mb-10 space-y-3 group">
              <div className="flex gap-20 items-center">
                <NextImage
                  className="rounded-full"
                  src="https://w7.pngwing.com/pngs/967/518/png-transparent-hashnode-logo-thumbnail-tech-companies-thumbnail.png"
                  alt=""
                  width={50}
                  height={50}
                />
                <button className="font-medium border p-2 items-center hidden group-hover:flex gap-2 bg-color2 hover:font-semibold text-white rounded-lg">
                  Read Post <FaExternalLinkAlt />
                </button>
              </div>

              <div className="">
                <h2 className="w-96 font-semibold text-lg">
                  How I designed an app that transforms web text stories into
                  real-time visual novels
                </h2>
              </div>
              <div className="flex w-96 flex-wrap gap-2.5">
                <span className="border-gray-400 p-1 border text-sm rounded">
                  #tech
                </span>
                <span className="border-gray-400 p-1 border text-sm rounded">
                  #tech
                </span>
                <span className="border-gray-400 p-1 border text-sm rounded">
                  #tech
                </span>
              </div>
              <div>
                <p className="max-w-lg">
                  TLDRAn app is designed to transform web text stories into
                  real-time visual novels, addressing the pain points of
                  episodic releases and burnout among creators. It includes
                  features like homepage customization, genre-based
                  recommendations, story information screens, personalized
                  reading experience, and an AI Recap feature.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
