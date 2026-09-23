const Hero = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#6324e8] via-[#8b3ff0] to-[#b05cf0] px-4 py-12 sm:px-6 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Trusted By Millions, Built For You
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          <div>
            <p className="text-sm text-white/80">Total Downloads</p>
            <h3 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
              29.6M
            </h3>
            <p className="mt-3 text-xs text-white/80">
              21% More Than Last Month
            </p>
          </div>
          <div>
            <p className="text-sm text-white/80">Total Reviews</p>
            <h3 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
              906K
            </h3>
            <p className="mt-3 text-xs text-white/80">
              46% More Than Last Month
            </p>
          </div>
          <div>
            <p className="text-sm text-white/80">Active Apps</p>
            <h3 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
              132+
            </h3>
            <p className="mt-3 text-xs text-white/80">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
