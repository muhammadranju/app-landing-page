function OurUsers() {
  return (
    <section className="container mx-auto content-center px-3 lg:mt-0 mt-3 lg:px-0">
      <div className="lg:w-96 text-center mx-auto">
        <p className="font-medium uppercase text-lg text-black dark:text-white ">
          testimonial
        </p>
        <h1 className="lg:text-5xl text-3xl font-bold text-black dark:text-white">
          what our users say about us?
        </h1>
      </div>

      <div className="flex flex-col relative z-20 lg:flex-row items-center">
        <div className="flex-1">
          <img
            className="absolute z-10 lg:mt-36 ml-100  w-full lg:w-auto"
            src="../../images/Group-1000002356.svg"
            alt=""
          />
          <img
            src="../../images/man-frame.png"
            className=" relative z-20 w-full lg:w-auto"
            alt=""
          />
        </div>

        <div className="flex-1">
          <h3 className="text-3xl font-semibold	mb-3 text-black dark:text-white">
            the best financial accounting app ever!
          </h3>
          <p className="text-lg font-medium dark:text-white text-gray-600 mb-3 lg:w-4/6">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <img className="mb-3" src="../../images/Group-35917.png" alt="" />
          <span className="text-lg font-medium text-black dark:text-white">
            nick jonas
          </span>
        </div>
      </div>
    </section>
  );
}

export default OurUsers;
