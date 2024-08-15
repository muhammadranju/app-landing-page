function ChooseUifry() {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:-mt-36 px-3 lg:px-0">
      <div className="flex-1">
        <span className="uppercase font-medium text-red-500">advatnages</span>
        <h1 className="lg:text-5xl mb-5 relative z-20 font-bold dark:text-white text-black">
          why choose Uifry?
        </h1>
        <div className="flex items-center">
          <i className="fa-regular fa-bell bg-red-500 p-3 rounded-full text-white"></i>
          <span className="text-2xl font-semibold ml-2 dark:text-white text-black">
            Clever notifications
          </span>
        </div>
        <p className="text-lg font-medium dark:text-white text-gray-600 lg:w-4/5 mt-5">
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
      </div>

      <div className="flex-1 relative lg:mt-0 mt-5">
        <img
          className="absolute z-10 lg:mt-52 mt-24"
          src="../../images/Group-1000002356.svg"
          alt=""
        />
        <img
          className="relative z-20"
          src="../../images/Group-35935.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default ChooseUifry;
