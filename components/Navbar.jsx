import { MEDIUM_URL, RESUME_URL } from "@/data/links";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <header className="flex fixed top-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full backdrop-blur-md bg-white/30 text-sm py-6 ">
        <nav
          className="wrapper w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link className="flex-none text-xl font-semibold " href="/">
              A S M Morshedul Hoque (Utsho)_
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                data-hs-collapse="#navbar-with-collapse"
                aria-controls="navbar-with-collapse"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-with-collapse"
            className="hidden basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <Link
                className="font-medium custom-underline-effect"
                href={RESUME_URL}
                target="_blank"
              >
                Resume
              </Link>

              <Link
                className="font-medium custom-underline-effect"
                href="#projects"
              >
                Projects
              </Link>

              <Link
                className="font-medium custom-underline-effect"
                href={MEDIUM_URL}
                target="_blank"
              >
                Blog
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
