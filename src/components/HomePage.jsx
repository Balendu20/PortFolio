import { handleDownload } from "../handleDownload";

const HomePage = ({ home }) => {
  return (
    <div ref={home} className="p1">
      <img src="sec1.jpg" className="sec1"></img>
      <img src="pic.png" className="mypic"></img>
      <div className=".parent-container">
        <container className="text-label">
          <h2>Hi Everyone, I am</h2>
          <h1>Balendu M S</h1>
          <h4>
            Greetings! I am aspiring ReactJS developer with a Master's in
            Computer Application,excited to commence my career in the software
            industry. Explore my portfolio to see the dedication of a new front
            end developer eager to contribute.
          </h4>
          <button className="btn" onClick={handleDownload}>
            Explore More
          </button>
        </container>
      </div>
      <div className="box-blue"></div>
    </div>
  );
};

export default HomePage;
