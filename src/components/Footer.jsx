function Footer() {
  return (
    <footer className=" p-10 mt-14 text-black dark:text-white container mx-auto ">
      <div className="footer lg:ml-5 lg:gap-36 container mx-auto">
        <aside>
          <span>
            <img src="../../images/logo.png" className="dark:invert " alt="" />
          </span>
          <span className="font-medium text-base">
            <i className="fa-solid fa-envelope text-red-500"></i>{" "}
            help@frybix.com
          </span>
          <span className="font-medium text-base">
            <i className="fa-solid fa-phone text-red-500"></i> +1 234 456 678 89
          </span>
        </aside>
        <nav>
          <h6 className="font-medium  text-3xl ">Links</h6>
          <a className="link link-hover font-medium">Home</a>
          <a className="link link-hover font-medium">About Us</a>
          <a className="link link-hover font-medium">Contact</a>
        </nav>
        <nav>
          <h6 className="font-medium  text-3xl ">Legal</h6>
          <a className="link link-hover font-medium">terms of use</a>
          <a className="link link-hover font-medium">privacy policy</a>
          <a className="link link-hover font-medium">cookie policy</a>
        </nav>
        <nav>
          <h6 className="font-medium  text-3xl ">Product</h6>
          <a className="link link-hover font-medium">take tour</a>
          <a className="link link-hover font-medium">live chat</a>
          <a className="link link-hover font-medium">reviews</a>
        </nav>
        <nav>
          <h6 className=" font-medium text-3xl ">Newsletter</h6>
          <a className="link link-hover font-medium">Stay up to date</a>
          <label className="input input-bordered pl-6 flex items-center relative">
            <input type="text" placeholder="Search" />
          </label>
          <button className="btn bg-black text-white absolute mt-[72px]  ml-32 ">
            Subscribe
          </button>
        </nav>
      </div>
      <hr className=" mx-auto lg:w-[50%]  border-1 border-base-300 dark:border-white my-12" />
      <aside className="text-center  mt-12 font-medium	">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          <a
            href="https://muhammadranju.vercel.app"
            target="_blank"
            className="link link-hover ml-2 underline"
          >
            Muhammad Ranju
          </a>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
