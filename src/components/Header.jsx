function Header() {
  return (
    <header className="flex container mx-auto  items-center mt-3 ">
      <div className="navbar bg-base-100">
        <div className=" mr-10">
          <div className="dropdown relative z-20">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="text-xl cursor-pointer">
            <img src="../../images/logo.png" className="dark:invert " alt="" />
          </a>
        </div>
        <div className="navbar-start hidden lg:flex ">
          <ul className="menu menu-horizontal text-gray-900  dark:text-white px-1 text-lg font-medium">
            <li>
              <a className="font-bold text-red-500">Home</a>
            </li>

            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Features</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-black lg:px-7 text-white">Download</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
