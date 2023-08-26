import React from "react";
import {
  FaBars,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Hello = () => {
  return (
    <React.Fragment>
      <h1 className="text-light-gray text-3xl text-center p-4 underline bg-gradient-to-r from-primary-blue to-dark-violet">
        Home Page
      </h1>
      <section className="sticky left-0 top-[59px] w-screen bg-black">
        <div className=" hidden sm:flex justify-between space-x-2 w-80 m-auto p-4">
          <FaBars size={30} />
          <Link to="facebook.com">
            <FaFacebook size={30} />
          </Link>

          <FaInstagram size={30} />
          <FaTwitter color="blue" size={30} />
          <a href="http://twitter.com/_kingaustinn">
            <FaTiktok size={30} />
          </a>
        </div>
      </section>

      <section
        id="grid"
        className=" bg-gradient-to-tr from-primary-violet to-light-gray p-4 sm:p-8 md:p-16 lg:p-24 sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full border"
      >
        <div>
          <h2 className="text-primary-violet font-semibold text-2xl text-center">
          </h2>
          <p className="text-lg p-2 text-left md:p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            sit dolorum maiores velit odio exercitationem eligendi animi
            adipisci fuga nemo, aspernatur odit illum illo ratione voluptates!
            Nisi, voluptatum. Error, doloribus
          </p>
        </div>
        
      </section>
    </React.Fragment>
  );
};

export default Hello;
