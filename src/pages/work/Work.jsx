import "./Work.css";
import Titles from "../../components/titles/Titles";
import Project from "../../components/project/Project";

const Work = () => {
  return (
    <div className="work">
      <Titles title1={"check out my"} title2={"recent projects"} />
      <div className="projects">
        <Project title="Minimalist" />
        <Project title="Summify" />
        <Project title="Sh-missions" />
        <Project title="BledBay" />
        <Project title="WassimMihoub" />
        <Project title="DialyseCenterManager" />
      </div>
    </div>
  );
};

export default Work;
