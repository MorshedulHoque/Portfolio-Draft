import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Educations() {
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
      href: "https://daffodil.ac",
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
      href: "https://www.idealcollegedhanmondi.edu.bd",
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
      href: "https://www.mmodel.edu.bd",
    },
  ];

  return (
    <div className="wrapper space-v" id="education">
      <h2 className="text-2xl font-medium border-b border-[#3C4B55] pb-2">
        Education
      </h2>

      <section className="max-w-md mx-auto space-v">
        {educationData.map((data) => (
          <div key={data?.id}>
            <h2 className="font-medium">
              <Link
                className="hover:underline"
                href={data?.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data?.degree} at {data?.institution}
                <FiArrowUpRight className="ml-1 inline-block mb-1" size={18} />
              </Link>
            </h2>
            <p className="text-mute">{data?.location}</p>
            <p className="mt-3 text-mute">
              {data?.skills.length > 0 && <p>{data?.skills}</p>}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
