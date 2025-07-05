import "./TechStack.css";
const TechStack = ({ title, icon }) => {
  return (
    <div className="techStack">
      <div className="techLogoWrapper">
        <img src={icon} alt={title} className="techLogo" />
      </div>
      <span className="techName">{title}</span>
    </div>
  );
};

export default TechStack;
