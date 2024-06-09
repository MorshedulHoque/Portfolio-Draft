export default function Project() {
  return (
    <div className="space-y-8">
      <div className="lg:flex justify-between">
        <div className="space-y-4">
          <p className="lg:max-w-xl text-center lg:text-start">
            We bZm Graphics Limited is a full service photo editing and
            retouching studio offering services to e-commerce, product
            photographers, model photographers photography agencies, brands,
            FMCG product photography companies and more.
          </p>

          <div className="flex gap-5 whitespace-nowrap flex-wrap justify-center lg:justify-start">
            <span>Next.js</span>
            <span>Next.js</span>
            <span>Next.js</span>
            <span>Next.js</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-start mt-14 lg:mt-0 ">
          Jan 2024
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-10 ">
        <div className="col-span-3 w-full">
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
            playsInline
            // poster={poster}
          >
            <source src="/videos/bzm.mp4" type="video/mp4" />
            Your browser does not support the video.
          </video>
        </div>
        <div className="col-span-3 md:col-span-2 bg-[url('/shape/shape-1.png')] bg-no-repeat bg-right-bottom lg:pt-16 lg:pl-10 p-4 space-y-4">
          <h3 className="text-base lg:text-4xl font-bold max-w-[270px]">
            Creative Studio
          </h3>
          <div>
            <a
              className="hover:underline flex gap-x-2 items-center transition hover:text-secondary"
              href={"#"}
              title="Visit Website"
              target="_blank"
            >
              VISIT WEBSITE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
