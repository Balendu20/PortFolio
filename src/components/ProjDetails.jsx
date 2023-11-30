import { FaAngleDoubleRight } from "react-icons/fa";

const ProjDetails = ({ proj, currentItem }) => {
  const { id, name, link, about } = proj[currentItem];
  return (
    <article className="proj-info">
      <h3>{name}</h3>
      <div className="link-box">
        <a href={link} target="_blank" className="link">
          Go to the site
        </a>
      </div>
      <div>
        {about.map((item, index) => {
          return (
            <div key={index} className="proj-desc">
              <FaAngleDoubleRight className="proj-icon"></FaAngleDoubleRight>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default ProjDetails;
