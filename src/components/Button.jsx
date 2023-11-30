const Button = ({ proj, currentItem, setcurrentItem }) => {
  return (
    <div className="btn-container">
      {proj.map((item, index) => {
        return (
          <button
            className={
              index === currentItem ? "proj-btn active-btn" : "proj-btn"
            }
            key={item.id}
            onClick={() => setcurrentItem(index)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
