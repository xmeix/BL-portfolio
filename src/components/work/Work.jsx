import "./Work.css";
import worklines from "./../../assets/worklines.svg";
import wom from "./../../assets/womansit.png";
import Project from "./Project";
import { useEffect, useRef } from "react";
import HorizontalScroll from "react-scroll-horizontal";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Work = () => {
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
    <div className="work">
      <img ref={r1} src={worklines} className="worklines" alt="ff" />
      <HorizontalScroll
        className="scroll projects-container"
        reverseScroll={true}
      >
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </HorizontalScroll>
      <img className="womansit" src={wom} alt="" />
    </div>
  );
};

export default Work;
