import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-bg-footer-mob md:bg-bg-footer-desk ">
      <div>
        <div id="logo" className="font-black antialiased text-2xl ">
          <a href="/">INSURE</a>
        </div>
        <div>
          <FaFacebook />
          <FaTwitter />
          <FaPinterest />
          <FaInstagram />
              </div>
              
      </div>
    </footer>
  );
};

export default Footer;
