function FullyCustomizable() {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row-reverse justify-center items-center lg:-mt-48 px-3 lg:px-0">
      <div className="flex-1">
        <div>
          <div className="flex items-center">
            <i className="fa-solid mr-3 fa-star-of-life bg-red-500 p-3 rounded-full text-white"></i>

            <span className="text-2xl font-semibold  dark:text-white text-black">
              fully customizable
            </span>
          </div>
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
          className="absolute z-10 lg:mt-52 mt-24 rotate-180 "
          src="../../images/Group-1000002356.svg"
          alt=""
        />
        <img
          className="relative z-20"
          src="../../images/Group-35933-2.png"
          alt=""
        />
      </div>
    </section>
  );
}

export default FullyCustomizable;
