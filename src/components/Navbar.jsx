import { scrollToSection } from "./Util";

const Navbar = ({ home, about, skill, project, contact }) => {
  return (
    <div className="nav">
      <nav className="nav-center">
        <h1 className="name">Balendu</h1>
        <ul className="nav-container">
          <li className="home-link" onClick={() => scrollToSection(home)}>
            home
          </li>
          <li className="about-link" onClick={() => scrollToSection(about)}>
            About
          </li>
          <li className="skill-link" onClick={() => scrollToSection(skill)}>
            Skill
          </li>
          <li className="proj-link" onClick={() => scrollToSection(project)}>
            Project
          </li>
          <li className="contact-link" onClick={() => scrollToSection(contact)}>
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
