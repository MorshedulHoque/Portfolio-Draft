import { educationData } from "@/data/data";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Educations() {
  return (
    <div className="wrapper space-v" id="education">
      <h2 className="text-2xl font-medium border-b border-gray-800 pb-2">
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
            <p className="text-secondary">{data?.location}</p>
            <p className="mt-3 text-secondary">
              {data?.skills?.length > 0 && data.skills.join(" ")}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
