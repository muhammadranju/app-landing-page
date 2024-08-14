function Hero() {
  return (
    <section className="flex flex-col lg:flex-row container mx-auto px-3 lg:px-0">
      <div className="relative flex-1">
        <div className="lg:mt-32 mt-16">
          <img
            className="absolute  z-10 -mt-10 ml-0 dark:opacity-70  md:ml-0 md:-mt-0   lg:-mt-40  lg:w-auto  lg:ml-32 px-0 "
            src="../../images/Group-1000002356.svg"
            alt=""
          />
          <h1 className="lg:text-7xl text-5xl font-bold dark:text-white text-black relative z-20 mb-10">
            Make The Best <br /> Financial Decisions
          </h1>
          <p className="relative z-20	text-xl  font-medium dark:text-white lg:text-gray-500 mb-10">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="relative z-20 flex gap-5">
            <button className="btn dark:bg-white px-7  bg-black text-white dark:text-black">
              Get Started <i className="fa-solid fa-arrow-right-long "></i>
            </button>
            <button className="btn bg-transparent cursor-pointer border-slate-600 border-[1px] shadow-none lg:px-7 dark:text-white text-black ">
              <i className="fa-regular fa-circle-play text-xl"></i> Watch Video
            </button>
          </div>
        </div>

        <div className="-mt-0 lg:-mt-5">
          <img
            className="lg:absolute z-20 w-full lg:w-auto"
            src="../../images/Group-35921.png"
            alt=""
          />
        </div>
      </div>

      <div className="lg:flex-1 lg:mt-0 relative z-40  lg:mb-0 mb-40">
        <div className="">
          <img
            className="absolute z-30 lg:w-4/6  w-4/5   "
            src="../../images/iPhone-13-Pro-Front.png"
            alt=""
          />
          <img
            className="absolute z-20 lg:ml-28 md:mt-24 w-4/5  ml-10 mt-10 lg:mt-16 lg:w-4/6"
            src="../../images/iPhone-13-Pro-Front-2.png"
            alt=""
          />
          <img
            className="absolute z-10 lg:ml-28 md:ml-24    lg:mt-16 md:w-4/5"
            src="../../images/iPhone-13-Pro-Front-3.png"
            alt=""
          />
          <img
            className="absolute z-0 md:top-80  w-full lg:-mt-20 mt-40 rotate-180 "
            src="../../images/Group-1000002356.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
