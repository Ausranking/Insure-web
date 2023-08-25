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
      <div className="flex justify-between gap-2 w-80 m-auto p-4 align-center">
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
      <section
        id="grid"
        className=" bg-gradient-to-tr from-primary-violet to-light-gray p-4 sm:p-8 md:p-16 lg:p-24 md:grid grid-cols-2 gap-5 w-full border"
      >
        <div>
          <h2 className="text-primary-violet font-semibold text-2xl text-center">
            Snappy process
          </h2>
          <p className="text-lg p-2 text-left md:p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            sit dolorum maiores velit odio exercitationem eligendi animi
            adipisci fuga nemo, aspernatur odit illum illo ratione voluptates!
            Nisi, voluptatum. Error, doloribus?
          </p>
        </div>
        <div>
          <h2 className="text-primary-violet font-semibold text-2xl text-center">
            Another process
          </h2>
          <p className="text-lg p-2 text-left md:p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repudiandae exercitationem mollitia iusto illum accusamus
            dignissimos pariatur earum vitae. Temporibus quos magni dolore nisi
            quia odit cumque veritatis, nobis rem.
          </p>
        </div>
        <div>
          <h2 className="text-primary-violet font-semibold text-2xl text-center">
            Another process
          </h2>
          <p className="text-lg p-2 text-left md:p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repudiandae exercitationem mollitia iusto illum accusamus
            dignissimos pariatur earum vitae. Temporibus quos magni dolore nisi
            quia odit cumque veritatis, nobis rem.
          </p>
        </div>
        <div>
          <h2 className="text-primary-violet font-semibold text-2xl text-center">
            Another process
          </h2>
          <p className="text-lg p-2 text-left md:p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repudiandae exercitationem mollitia iusto illum accusamus
            dignissimos pariatur earum vitae. Temporibus quos magni dolore nisi
            quia odit cumque veritatis, nobis rem.
          </p>
        </div>
        <div>
          <h2 className="text-primary-violet font-semibold text-2xl text-center">
            Another process
          </h2>
          <p className="text-lg p-2 text-left md:p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repudiandae exercitationem mollitia iusto illum accusamus
            dignissimos pariatur earum vitae. Temporibus quos magni dolore nisi
            quia odit cumque veritatis, nobis rem.
          </p>
        </div>
        <div>
          <h2 className="text-primary-violet font-semibold text-2xl text-center">
            Another process
          </h2>
          <p className="text-lg p-2 text-left md:p-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repudiandae exercitationem mollitia iusto illum accusamus
            dignissimos pariatur earum vitae. Temporibus quos magni dolore nisi
            quia odit cumque veritatis, nobis rem.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hello;
