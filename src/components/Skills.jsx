const Skills = ({ skill }) => {
  return (
    <div className="skill-sec" ref={skill}>
      <div className="item-center">
        <h2>Skills</h2>
        <h1>What I am capable of?</h1>
        <div className="icon-center"></div>
        <img className="icons" src="icon/html-5.png" alt="html-png" />
        <img className="icons" src="icon/css-3.png" alt="css-png" />
        <img className="icons" src="icon/js.png" alt="js-png" />
        <img className="icons" src="icon/react-js.png" alt="rect-png" />
        <img className="icons" src="icon/python.png" alt="python-png" />
      </div>
    </div>
  );
};

export default Skills;
