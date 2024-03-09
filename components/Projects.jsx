import Project from "./Project";

export default function Projects() {
  return (
    <div className="wrapper space-y-20">
      <h2 className="text-2xl font-bold border-b border-[#3C4B55] pb-2">
        Projects
      </h2>

      <div className="grid grid-cols-2 gap-10">
        <div className="bg-black p-4 space-lg">
          <div className="h-[350px] bg-gray-100">video</div>
          <div className="space-lg">
            <div>
              <h3 className="text-base lg:text-2xl font-bold text-white">
                BZM Graphics
              </h3>

              <a
                className="hover:underline flex gap-x-2 items-center transition text-white hover:text-secondary"
                href="#"
                title="Visit Website"
              >
                VISIT WEBSITE
              </a>
            </div>
            <div className="flex gap-5 whitespace-nowrap flex-wrap justify-center lg:justify-start text-white ">
              <span>Next.js</span>
              <span>Next.js</span>
              <span>Next.js</span>
              <span>Next.js</span>
            </div>
          </div>
        </div>
        <div className="bg-black p-4 space-lg">
          <div className="h-[350px] bg-gray-100">video</div>
          <div className="space-lg">
            <div>
              <h3 className="text-base lg:text-2xl font-bold text-white">
                Creative Studio
              </h3>

              <a
                className="hover:underline flex gap-x-2 items-center transition text-white hover:text-secondary"
                href="#"
                title="Visit Website"
              >
                VISIT WEBSITE
              </a>
            </div>
            <div className="flex gap-5 whitespace-nowrap flex-wrap justify-center lg:justify-start text-white ">
              <span>Next.js</span>
              <span>Next.js</span>
              <span>Next.js</span>
              <span>Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
