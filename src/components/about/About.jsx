import "./About.css";
import worklines from "./../../assets/aboutMe.svg";
import MeImg from "./../../assets/Me.svg";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const About = () => {
  const r1 = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      r1.current,
      { y: "-150vh" },
      {
        duration: 2.5,
        scrollTrigger: {
          scrub: 1,
        },
        y: -20,
        // opacity: 0.6,
        ease: "power4.out",
      }
    );
  }, []);
  return (
    <div className="about">
      <img ref={r1} src={worklines} className="worklinesAbt" alt="ff" />
      <div className="aboutMe-container">
        <div className="me-img-container">
          <img src={MeImg} alt="BOUALOUACHE Lamia" />
        </div>
        <div className="aboutMe-description-container">
          I'm a software engineer with experience in full-stack web development
          and a focus on JavaScript technologies. My expertise lies in building
          scalable web applications and crafting intuitive user experiences. I
          thrive in dynamic and collaborative environments, always eager to
          learn and implement cutting-edge technologies.
        </div>
      </div>
    </div>
  );
};

export default About;
