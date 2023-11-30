const About = ({ about }) => {
  return (
    <div className="about-sec" ref={about}>
      <img src="Code typing.png" className="aboutpic" />
      <div className="about-text">
        <h2>About</h2>
        <h1>About Me?</h1>
        <h4>
          Hey there! I'm Balendu, a recent Master's graduate in Computer
          Applications. My expertise revolves around JavaScript,ReactJS and
          adept to developing dynamic web applications, and I'm enthusiastic
          about leveraging these skills in real-world applications.I'm currently
          exploring new opportunities in the field, seeking challenges that
          allow me to apply and expand my technical proficiency.
        </h4>
      </div>
    </div>
  );
};

export default About;
