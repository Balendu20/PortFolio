import { useState } from "react";
import { projectData } from "../data";
import Button from "./Button";
import ProjDetails from "./ProjDetails";

const Projects = ({ project }) => {
  const [currentItem, setcurrentItem] = useState(0);
  const [proj, setproj] = useState(projectData);

  return (
    <div ref={project}>
      <section className="proj-center">
        <Button
          proj={proj}
          currentItem={currentItem}
          setcurrentItem={setcurrentItem}
        />
        <ProjDetails proj={proj} currentItem={currentItem} />
      </section>
    </div>
  );
};

export default Projects;
