import { useRef } from "react";
import "./App.css";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const skill = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  return (
    <div className="page">
      <Navbar
        about={about}
        home={home}
        skill={skill}
        project={project}
        contact={contact}
      />
      <HomePage home={home} />
      <About about={about} />
      <Skills skill={skill} />
      <Projects project={project} />
      <Footer contact={contact} />
    </div>
  );
}

export default App;
