import { FiExternalLink } from "react-icons/fi";
import NextImage from "./ui/NextImage";

export default function Experience(props) {
  const { timeRange, skills, listItems, logo, name, position } =
    props.experience;

  return (
    <div
      className="grid col-span-1 gap-5 lg:grid-cols-3"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="col-span-1 ">
        <span>{timeRange}</span>
      </div>
      <div className="col-span-2 ">
        <div className="space-md">
          <div className="flex items-center gap-5">
            <NextImage src={logo} width={80} height={80} />
            <div>
              <a href="#" className="hover:underline  transition">
                <h2 className="flex items-center gap-2 font-medium ">
                  {name}
                  <FiExternalLink />
                </h2>
              </a>
              <p>{position}</p>
            </div>
          </div>

          <ul className="list-disc pl-6 space-y-2 max-w-md">
            {listItems.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>

          <p>
            Skill:{" "}
            {skills.map((skill) => (
              <span key={skill} className="pr-2">
                {skill}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
