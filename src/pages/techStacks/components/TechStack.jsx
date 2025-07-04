import "./TechStack.css";
const TechStack = ({ title, icon, percentage }) => {
  return (
    <div className="techStack">
      <div className="techBar">
        <div className="coloredTechBar" style={{ height: percentage }}>
          <p className="percentage">{percentage}</p>
        </div>
      </div>
      <img src={icon} alt={title} />
    </div>
  );
};

export default TechStack;
