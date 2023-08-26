import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import { navLinks } from "../constants";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <header className="  w-screen">
        <nav className="fixed top-0 w-screen bg-white shadow-xl text-primary-violet ">
          <div className=" md:w-[80%] px-6 sm:px-8 m-auto flex justify-between items-center w-screen min-h-[75px] lg:max-h-[60px] ">
            <div id="logo" className="font-black antialiased text-2xl ">
              <a href="/">INSURE</a>
            </div>

            <ul className="flex  justify-between items-center space-x-4 lg:space-x-8 max-sm:hidden  ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
              <Button text="VIEW PLANS" />
            </ul>

            {/* ...hamburger-menu,..... */}
            <div
              onClick={handleNav}
              className="grid place-items-center border sm:hidden w-max p-2"
            >
              {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
            </div>

            {/* .....mobile-menu.......  */}

            <ul
              onClick={handleNav}
              className={nav ? "mobile-nav-open" : " mobile-nav-close"}
            >
              {navLinks.map((item) => (
                <li key={item.label} className="p-4">
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
              <Button text="VIEW PLANS" />
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
