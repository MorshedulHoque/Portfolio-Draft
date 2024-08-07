import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import HTML_CANVAS_LOGO from "../public/logo/html-canvas.png";
import LOCALIZATION_LOGO from "../public/logo/localization.png";
import NEXT_JS_LOGO from "../public/logo/next-js-logo.png";
import REACTJS_LOGO from "../public/logo/react-logo.png";
import TAILWINDCSS_LOGO from "../public/logo/tailwindcss.png";
import { BZM_GRAPHICS_URL, MASKBG_URL, OJIEAME_URL } from "./links";

const workExperienceData = [
  {
    id: 1,
    logo: "/codecony.jpg",
    name: "Codecony",
    designation: "Frontend Developer",
    timeRange: "Aug 2023 - Now",
    listItems: [
      "Developed and maintained existing web projects using Next.js, enhancing user experiences.",
      "Improved website performance by 20% through best practices in Next.js.",
      "Using Sanity for blog content management.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    href: "https://codecony.com",
    address: "Mohammadpur, Dhaka",
    jobDescription: "Making web apps, UI updates, and internal projects.",
  },
  {
    id: 2,
    logo: "/letsdunch.jpg",
    name: "Lets Dunch",
    designation: "Frontend Developer",
    timeRange: "Jan 2022 - Nov 2022",
    listItems: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
    ],
    skills: ["Java", "Spring Boot", "SQL", "RESTful APIs", "Git"],
    href: "https://www.letsdunch.com",
    address: "Dubai, UAE (Remote)",
    jobDescription:
      "Developed front-end using React.js, Tailwind CSS and Redux; enhanced UI/UX.",
  },
];

const educationData = [
  {
    id: "1",
    date: "2014 - 2020",
    institution: "Daffodil International Academy",
    degree: "Bsc, Business Information Technology",
    location: "Dhaka, Bangladesh",
    src: "/logo/daffodil-international-academy.jpg",
    alt: "daffodilUniLogo",
    grade: null,
    skills: [
      "Web Development - ",
      "Software Development Life Cycle (SDLC) - ",
      "Design Thinking - ",
      "Agile Methodologies",
    ],
    href: "https://daffodil.ac",
  },
  {
    id: "2",
    date: "2010 - 2012",
    institution: "Ideal College",
    degree: "Higher Secondary Certificate (HSC)",
    location: "Dhaka, Bangladesh",
    src: "/logo/ideal-college.jpg",
    alt: "idealCollegeLogo",
    grade: "GPA 4.75 out of 5.00",
    skills: [],
    href: "https://www.idealcollegedhanmondi.edu.bd",
  },
  {
    id: "3",
    date: "2005 - 2010",
    institution: "Motijheel Model High School & College",
    degree: "Secondary School Certificate (SSC)",
    location: "Dhaka, Bangladesh",
    src: "/logo/motijheel-model-high-school-and-college.jpg",
    alt: "motijheelModelLogo",
    grade: "GPA 4.70 out of 5.00",
    skills: [],
    href: "https://www.mmodel.edu.bd",
  },
];

const techLogo = [
  {
    name: "Next JS",
    srcUrl: "https://i.ibb.co/85hCNp1/nextjs.png",
  },
  { name: "JavaScript", srcUrl: "/logo/javascript.png" },
  { name: "Tailwind CSS", srcUrl: "/logo/tailwindcss.png" },
  { name: "React", srcUrl: "/logo/react.png" },
  { name: "Redux", srcUrl: "/logo/redux.webp" },
  {
    name: "Express JS",
    srcUrl: "https://i.ibb.co/DMr2T4v/express-js.png",
  },
  { name: "Mongoose", srcUrl: "/logo/mongoose.png" },
  { name: "MongoDB", srcUrl: "/logo/mongo-db.png" },
  { name: "Node.js", srcUrl: "/logo/nodejs.png" },
  { name: "HTML", srcUrl: "/logo/html.png" },
  { name: "CSS", srcUrl: "/logo/css.png" },
  { name: "Bootstrap", srcUrl: "/logo/bootstrap.png" },
];

const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    href: "https://www.linkedin.com/in/taibislamdipu",
  },
  {
    id: 2,
    name: "Github",
    icon: <FaGithub size={30} />,
    href: "https://github.com/taibislamdipu",
  },
  {
    id: 3,
    name: "Beecrowd",
    icon: <SiLeetcode size={30} />,
    href: "https://judge.beecrowd.com/en/profile/834556",
  },
  {
    id: 4,
    name: "Medium",
    icon: <FaMedium size={30} />,
    href: "https://medium.com/@taibislamdipu",
  },
  {
    id: 5,
    name: "Facebook",
    icon: <FaFacebook size={30} />,
    href: "https://www.facebook.com/taibislamdipu",
  },
];

const projectsData = [
  {
    id: 1,
    title: "bZm Graphics",
    description:
      "bZm Graphics Ltd. is a Visual Content Retouching Company for E-commerce, Studios, and Brands.",
    imageSrc: "/images/bzm.png",
    imageAlt: "bZm Graphics",
    url: BZM_GRAPHICS_URL,
    techStack: [
      {
        name: "Next.js",
        icon: NEXT_JS_LOGO,
      },
      { name: "Tailwind CSS", icon: TAILWINDCSS_LOGO },
      { name: "Localization", icon: LOCALIZATION_LOGO },
    ],
  },
  {
    id: 2,
    title: "Mask BG",
    description:
      "Free AI Image Remove Background. Remove the background of your image.",
    imageSrc: "/images/remove-bg.png",
    imageAlt: "MASKBG",
    url: MASKBG_URL,
    techStack: [
      { name: "HTML5 Canvas", icon: HTML_CANVAS_LOGO },
      { name: "Next.js", icon: NEXT_JS_LOGO },
      { name: "Tailwind.css", icon: TAILWINDCSS_LOGO },
    ],
  },
  {
    id: 3,
    title: "Ojieame",
    description:
      "A portfolio website for a product designer who wants to showcase his works.",
    imageSrc: "/images/ojieame.webp",
    imageAlt: "Ojieame",
    url: OJIEAME_URL,
    techStack: [
      { name: "React.js", icon: REACTJS_LOGO },
      { name: "Tailwind CSS", icon: TAILWINDCSS_LOGO },
    ],
  },
];

export {
  educationData,
  projectsData,
  socialLinks,
  techLogo,
  workExperienceData,
};
