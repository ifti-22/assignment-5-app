import bannerStack from "./assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

        {/* Hero Content */}
        <div>
          <h1 className="text-5xl font-bold leading-tight text-slate-800">
            Build Your Ideal
            <br />

            <span className="brand-gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-8 flex gap-3">

            {/* Primary Button */}
            <button
              className="brand-gradient rounded-md px-5 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Explore Technologies
            </button>

            {/* Secondary Button */}
            <button
              className="rounded-md border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              Learn More
            </button>

          </div>
        </div>

        {/* Hero Image */}
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