import "./Work.css";
import Titles from "../../components/titles/Titles";
import Project from "../../components/project/Project";

const Work = () => {
  return (
    <div className="work">
      <Titles title1={"check out my"} title2={"recent projects"} />
      <div className="projects">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Work;
