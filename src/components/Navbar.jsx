import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="bg-white shadow-xl text-primary-violet ">
      <div className=" md:w-[80%] m-auto flex justify-between items-center w-screen min-h-[75px] lg:max-h-[50px] px-10">
        <div id="logo" className="font-black antialiased text-2xl ">
          INSURE
        </div>

        <ul className="md:flex justify-between items-center gap-8 hidden  ">
          <li>
            <Link to="/how-we-work">HOW WE WORK</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/how-we-work">ACCOUNT</Link>
          </li>
          <li>
            <Button text="VIEW PLANS"></Button>
          </li>
        </ul>

        {/* ...hamburger-menu,..... */}
        <div
          onClick={handleNav}
          className="grid place-items-center border md:hidden w-max p-2"
        >
          {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>

        {/* .....mobile-menu.......  */}

        <ul
          onClick={handleNav}
          className={
            nav
              ? " overflow-hidden absolute left-0 top-5 h-screen w-screen md:hidden text-light-gray flex flex-col items-center py-12 bg-dark-violet bg-bg-mobile-nav bg-no-repeat bg-right-bottom bg-contain mt-14 ease-in duration-400"
              : " absolute top-0 left-[-100%] ease-in-out duration-500 overflow-hidden"
          }
        >
          <li className="p-6 m-2">
            <Link to="/how-we-work">HOW WE WORK</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li className="p-6 m-2">
            <Link to="/how-we-work">ACCOUNT</Link>
          </li>
          <li className="p-4">
            <Button text="VIEW PLANS"></Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
