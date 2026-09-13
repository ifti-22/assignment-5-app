import bannerStack from "./assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-5xl font-bold leading-tight text-slate-800">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-8 flex gap-3">
            <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-3 text-sm font-medium text-white">
              Explore Technologies
            </button>

            <button className="rounded-md border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={bannerStack}
            alt="Development stack illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;