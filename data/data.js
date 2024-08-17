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
    name: "BZM Graphics Ltd.",
    designation: "Data Analyst",
    timeRange: "March 2023 - July 2024",
    listItems: [
      "Developed and maintained existing web projects using Next.js, enhancing user experiences.",
      "Improved website performance by 20% through best practices in Next.js.",
      "Using Sanity for blog content management.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
    href: "https://www.bzmgraphics.com/",
    address: "Mohammadpur, Dhaka",
    jobDescription: "Analyzed large datasets and created interactive dashboards, produced monthly and weekly reports, managed relationships with foreign clients, and led a team of over 55 people.",
  },
  {
    id: 2,
    logo: "/letsdunch.jpg",
    name: "Advanced Machine Intelligence Research Lab-AMIRL",
    designation: "Research Assistant",
    timeRange: "Nov 2023 - Now",
    listItems: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
    ],
    skills: ["Java", "Spring Boot", "SQL", "RESTful APIs", "Git"],
    href: "https://www.amirl.org/",
    address: "Dhaka, Bangladesh",
    jobDescription:
      "I am currently contributing to a research project focused on Deep Learning and Natural Language Processing (NLP).",
  },
  {
    id: 3,
    logo: "/letsdunch.jpg",
    name: "Advanced Machine Learning Lab",
    designation: "Research Assistant",
    timeRange: "May 2021 - Nov 2022",
    listItems: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet.",
    ],
    skills: ["Java", "Spring Boot", "SQL", "RESTful APIs", "Git"],
    href: "#",
    address: "Dhaka, Bangladesh",
    jobDescription:
      "Conducted research on deep learning tasks, resulting in the publication of 1 conference paper and 1 Q2 journal article.",
  },
];

const educationData = [
  {
    id: "1",
    date: "2018 - 2022",
    institution: "Bangladesh University of Business & Technology (BUBT)",
    degree: "B.Sc., Computer Science and Engineering (CSE)",
    location: "Dhaka, Bangladesh",
    src: "/logo/daffodil-international-academy.jpg",
    alt: "daffodilUniLogo",
    grade: null,
    skills: [
      "Received a merit scholarship five times - ",
      "Actively participated in various clubs - ",
      "Served as the Class Representative (CR) - ",
      "Led all group projects at the university",
    ],
    href: "https://www.bubt.edu.bd/",
  }
];

const techLogo = [
  { name: "Python", srcUrl: "/logo/python.png", },
  { name: "NumPy", srcUrl: "/logo/numpy.png" },
  { name: "Pandas", srcUrl: "/logo/pandas.png" },
  { name: "Scikit-Learn", srcUrl: "/logo/scikit-learn.png" },
  { name: "Keras", srcUrl: "/logo/keras.png" },
  { name: "Tensorflow", srcUrl: "/logo/tensorflow.png", },
  { name: "Pytorch", srcUrl: "/logo/pytorch.png" },
  { name: "SQL", srcUrl: "/logo/sql-server.png" },
  { name: "MongoDB", srcUrl: "/logo/mongo-db.png" },
  { name: "Power BI", srcUrl: "/logo/power-bi.png" },
  { name: "Looker Studio", srcUrl: "/logo/google-data-studio.png" },
  { name: "Selenium", srcUrl: "/logo/selenium.png" },
];

const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <FaLinkedin size={30} />,
    href: "https://www.linkedin.com/in/a-s-m-morshedul-hoque/",
  },
  {
    id: 2,
    name: "Github",
    icon: <FaGithub size={30} />,
    href: "https://github.com/MorshedulHoque",
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
    href: "https://medium.com/@asmmorshedulhoque",
  },
  {
    id: 5,
    name: "Facebook",
    icon: <FaFacebook size={30} />,
    href: "https://www.facebook.com/md.utsho.37",
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
