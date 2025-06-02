import { useState } from "react";
import "./About.css";
import SkillDropper from "./components/SkillDropper";
const About = () => {
  const skillsArray = ["JavaScript", "React", "CSS", "Node.js", "TypeScript"];

  const [bioLength, setBioLength] = useState("short");

  const getRadioLabelClass = (value) =>
    bioLength === value ? "radio-label selected" : "radio-label";

  const getDescription = (value) => {
    switch (value) {
      case "short":
        return (
          <div className="me-description">
            Software engineer passionate about programming, with experience in
            JavaScript, Python, and Dart. I adapt quickly to new projects and
            technologies.
          </div>
        );
      case "medium":
        return (
          <div className="me-description">
            As a software engineer, I’ve worked on web applications, backend
            systems, and mobile apps using JavaScript, Python, and Dart. I’m
            curious, adaptable, and comfortable working both independently and
            in a team.
          </div>
        );
      case "long":
        return (
          <div className="me-description">
            I’m a software engineer passionate about programming and innovation.
            I’ve contributed to various projects, including web development,
            backend systems, and mobile applications, using popular languages
            like JavaScript, Python, and Dart. While I continuously develop my
            skills, I’m confident in my ability to tackle challenges and deliver
            creative solutions. I work efficiently both independently and
            collaboratively, and I adapt quickly to new technologies and project
            environments.
          </div>
        );
      default:
        return "";
    }
  };
  const radioOptions = [
    { value: "short", label: "less is more" },
    { value: "medium", label: "a bit more" },
    { value: "long", label: "story of my life" },
  ];

  return (
    <div className="about">
      <div className="about-me">
        <h1>About Me</h1>
        <p className="h1-description">Adjust bio length</p>
        <div className="radio-buttons">
          {radioOptions.map((option) => (
            <label
              key={option.value}
              className={getRadioLabelClass(option.value)}
            >
              <input
                type="radio"
                name="bio-length"
                value={option.value}
                checked={bioLength === option.value}
                onChange={() => setBioLength(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
        {getDescription(bioLength)}
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <p className="h1-description">
          Click on Skills to see what I learned during my 5 years of university
        </p>
        <SkillDropper skills={skillsArray} />
      </div>
    </div>
  );
};

export default About;
