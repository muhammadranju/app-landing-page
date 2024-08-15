function UifryPremium() {
  return (
    <section className="container mx-auto  dark:text-white text-black mt-80 flex flex-col-reverse lg:flex-row items-center px-3 lg:px-0">
      <div className="flex-1 relative lg:mt-0 mt-5">
        <img
          className="absolute z-10 mt-10"
          src="../../images/Group-1000002356.svg"
          alt=""
        />
        <img
          className="relative  z-20"
          src="../../images/Group-35933.png"
          alt=""
        />
      </div>

      <div className="flex-1 z-20 ">
        <span className="uppercase font-medium  text-red-500">features</span>
        <img
          className="absolute z-10 lg:ml-60 -ml-52  -mt-30 lg:w-80 rotate-180 blur-lg	"
          src="../../images/Group-1000002356.svg"
          alt=""
        />
        <h1 className="lg:text-5xl text-3xl relative z-20 font-bold dark:text-white text-black">
          uifry premium
        </h1>
        <div className="mt-5 text-lg mb-3 relative z-20">
          <i className="fa-regular fa-star text-red-500 "> </i>
          <span className="font-semibold"> budgeting intervals</span>
          <p className="text-lg font-medium dark:text-white text-gray-600 lg:w-4/5">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquots
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div className="mt-5 text-lg mb-3 relative z-20">
          <i className="fa-solid fa-bahai  text-red-500 "></i>
          <span className="font-semibold"> budgeting intervals</span>
          <p className="text-lg font-medium dark:text-white text-gray-600 lg:w-4/5">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div className="mt-5 text-lg relative z-20">
          <i className="fa-regular fa-square  text-red-500 "></i>
          <span className="font-semibold"> budgeting intervals</span>
          <p className="text-lg font-medium dark:text-white text-gray-600 lg:w-4/5">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default UifryPremium;
