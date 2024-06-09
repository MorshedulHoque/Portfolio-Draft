import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

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
    jobDescription:
      " Making mobile apps, games & services for Windows Phone (rip)",
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
    address: "Dubai, UAE",
    jobDescription:
      " Making mobile apps, games & services for Windows Phone (rip)",
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
      "JavaScript - ",
      "HTML - ",
      "Cascading Style Sheets (CSS) - ",
      "Git - ",
      "Software Development Life Cycle (SDLC) - ",
      "Design Thinking - ",
      "Object-Oriented Programming (OOP) - ",
      "Agile Methodologies",
    ],
  },
  {
    id: "2",
    date: "2010 - 2012",
    institution: "Ideal College",
    degree: "Higher Secondary School Certificate, Business/Commerce",
    location: "Dhaka, Bangladesh",
    src: "/logo/ideal-college.jpg",
    alt: "idealCollegeLogo",
    grade: "GPA 4.75 out of 5.00",
    skills: [],
  },
  {
    id: "3",
    date: "2005 - 2010",
    institution: "Motijheel Model High School & College",
    degree: "Business/Commerce",
    location: "Dhaka, Bangladesh",
    src: "/logo/motijheel-model-high-school-and-college.jpg",
    alt: "motijheelModelLogo",
    grade: "GPA 4.70 out of 5.00",
    skills: [],
  },
];

const techLogo = [
  { id: 1, name: "JavaScript", srcUrl: "/logo/javascript.png" },
  { id: 2, name: "React", srcUrl: "/logo/react.png" },
  { id: 3, name: "Next.js", srcUrl: "/logo/next-js.png" },
  { id: 4, name: "Tailwind CSS", srcUrl: "/logo/tailwindcss.png" },
  { id: 5, name: "Redux", srcUrl: "/logo/redux.webp" },
  { id: 6, name: "Express.js", srcUrl: "/logo/express-js.webp" },
  { id: 7, name: "Mongoose", srcUrl: "/logo/mongoose.jpg" },
  { id: 8, name: "MongoDB", srcUrl: "/logo/mongo-db.png" },
  { id: 9, name: "Node.js", srcUrl: "/logo/nodejs.png" },
  { id: 10, name: "HTML", srcUrl: "/logo/html.png" },
  { id: 11, name: "CSS", srcUrl: "/logo/css.png" },
  { id: 12, name: "Bootstrap", srcUrl: "/logo/bootstrap.png" },
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

export { educationData, socialLinks, techLogo, workExperienceData };
