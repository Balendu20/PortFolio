import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = ({ contact }) => {
  return (
    <footer className="footer" ref={contact}>
      <div className="contact-section">
        <h2>Contact</h2>
        <h1>Get in touch</h1>
        <p>balendums24@gmail.com</p>
      </div>
      <div className="social-icons">
        <a href="https://github.com/Balendu20" target="_blank">
          <FaGithub className="icon" size={23} />
        </a>
        <a href="mailto:balendums24@gmail.com">
          <BiLogoGmail className="icon" size={24} />
        </a>
      </div>
      <div className="developer-info">
        <h4>Develop & Designed by Balendu</h4>
      </div>
    </footer>
  );
};

export default Footer;
