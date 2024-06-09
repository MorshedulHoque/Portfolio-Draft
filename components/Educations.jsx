import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function Educations() {
  return (
    <div className="wrapper space-y-20" id="education">
      <h2 className="text-2xl font-bold border-b border-[#3C4B55] pb-2">
        Education
      </h2>

      <section className="max-w-md mx-auto">
        <div className="mb-10">
          <h2 className="font-semibold">
            <Link
              className="hover:underline"
              href="#"
              aria-label="Bachelor of Arts at RheinMain University of Applied Sciences"
            >
              Bachelor of Arts at RheinMain University of Applied Sciences
              <FiArrowUpRight className="ml-1 inline-block mb-1" size={18} />
            </Link>
          </h2>
          <p>Wiesbaden, Germany</p>
          <p className="mt-3">
            Communication Design, 3D motion & mobile/web development.
          </p>
        </div>
      </section>
    </div>
  );
}
