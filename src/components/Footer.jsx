import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { FooterLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="bg-bg-footer-mob md:bg-bg-footer-desk bg-no-repeat bg-light-gray shadow-2xl w-full h-max  pb-10">
      <div className="flex flex-col items-center m-auto pt-14 border-primary-violet border-b px-6 w-3/4 md:flex-row md:justify-between ">
        <div id="logo" className="font-black antialiased text-2xl ">
          <a href="/" className="text-dark-violet  block">
            INSURE
          </a>
        </div>
        <div className="flex p-4 space-x-3 text-gray-500">
          <a href="" className="hover:text-primary-violet">
            <FaFacebook size={25} />
          </a>
          <a href="http://twitter.com/_kingaustinn" className="hover:text-primary-violet">
            <FaTwitter size={25} />
          </a>
          <a href="" className="hover:text-primary-violet">
            <FaPinterest size={25} />
          </a>
          <a href="" className="hover:text-primary-violet">
            <FaInstagram size={25} />
          </a>
        </div>
      </div>

      <div className="text-center pt-6 md:flex justify-around items-center px-30">
        {FooterLinks.map((item) => (
          <div>
            <div className="md:flex items-start">
              <h3 className="text-primary-violet/50 font-semibold text-sm mt-6 tracking-wide">
                {item.label}
              </h3>
            </div>

            <ul className="text-dark-violet font-bold tracking-tighter text-xl mt-4">
              {item.links.map((link, index) => (
                <li className="p-2 hover:underline hover:cursor-pointer" key={index}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
