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
      <header className="  w-full sticky top-0 z-10 overflow-x-clip">
        <nav className="w-full bg-white shadow-xl text-primary-violet z-10 ">
          <div className=" md:w-[80%] px-6 sm:px-8 m-auto flex justify-between items-center w-screen min-h-[75px] lg:max-h-[60px] ">
            <div id="logo" className="font-black antialiased text-2xl ">
              <a href="/">INSURE</a>
            </div>

            <ul className="flex  justify-between items-center space-x-4 lg:space-x-8 max-sm:hidden  ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <Button text="VIEW PLANS" id="nav-btn" />
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
                  <a href={item.href}>{item.label}</a>
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
