import "./Hero.css";
import "./../navbar/Navbar.css";
import homeImg from "./../../assets/homeWOMAN.svg";
import line1 from "./../../assets/line1.svg";
import line2 from "./../../assets/line2.svg";
import line3 from "./../../assets/line3.svg";
import arrow from "./../../assets/arrow.svg";
import circle from "./../../assets/circle.svg";
import worklines from "./../../assets/worklines.svg";
import hero from "./../../assets/hero.png";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMousePosition from "../../hooks/useMousePosition";
import { updateCursorStyleLeave } from "../navbar/Navbar";
import TextSpan from "../textFollowCursor/TextSpan";
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const Hero = () => {
  const r1 = useRef(null);
  const r2 = useRef(null);
  const rl1 = useRef(null);
  const rl2 = useRef(null);
  const parallax = useRef(null);
  const sentence = "BOUALOUACHE Lamia".split("");
  useEffect(() => {
    gsap.to(parallax.current, {
      duration: 2.5,
      scrollTrigger: {
        scrub: 1,
      },
      // y: -100,
      // height: "1000px",
      // opacity: 0.6,
      scale: 1.2,
      ease: "power4.out",
    });

    gsap.to(rl1.current, {
      duration: 2.5,

      scrollTrigger: {
        scrub: 1,
      },
      height: "120vh",
      // opacity: 0.6,
      ease: "power4.out",
    });
    gsap.to(rl2.current, {
      duration: 2.5,
      scrollTrigger: {
        scrub: 1,
      },
      height: "130vh",
      // opacity: 0.6,
      ease: "power4.out",
    });
    gsap.fromTo(
      r2.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 4,
        scrollTrigger: {
          trigger: r2.current,
        },
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      r1.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 4,
        scrollTrigger: {
          trigger: r1.current,
        },
        ease: "power4.out",
      }
    );
  }, []);

  const updateCursorStyleHome = () => {
    gsap.to("#cursor", {
      duration: 0.1,
      width: 5,
      height: 30,
      backgroundColor: "var(--violet)",
      color: "var(--violet)",
      border: "solid 1px var(--black)",
      borderRadius: 50,
    });
  };
  return (
    <div className="hero">
      <div className="partOne">
        <div className="heroStatements">
          <div
            className="name"
            onMouseEnter={(e) => updateCursorStyleHome()}
            onMouseLeave={(e) => updateCursorStyleLeave()}
          >
            {sentence.map((letter, i) => {
              return (
                <TextSpan key={i}>
                  {letter === " " ? "\u00A0" : letter}
                </TextSpan>
              );
            })}
          </div>
          <img className="line1" src={line1} alt="deskOfAnEngineer" />

          <div className="job1">Software engineer</div>
          <div className="job2">& Web Developer</div>
          <Link
            ref={r1}
            className="link"
            activeClass="active"
            to={"work"}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button className="toWorkBtn">Have a look on my work</button>
          </Link>
          <div className="absolutes">
            <img
              className="line2"
              ref={rl2}
              src={line2}
              alt="deskOfAnEngineer"
            />
            {/* <img
              className="line3"
              ref={rl1}
              src={line3}
              alt="deskOfAnEngineer"
            /> */}
            {/* <img className="arrow" src={arrow} alt="deskOfAnEngineer" /> */}
          </div>
        </div>
        <div className="img-container">
          <img
            id="homeImg"
            className="homeImg"
            src={homeImg}
            ref={parallax}
            alt="deskOfAnEngineer"
          />
        </div>
      </div>
      <div className="partTwo">
        {/* <div className="heroImg-container">
          <img className="heroImg" ref={r2} src={hero} alt="deskOfAnEngineer" />{" "}
        </div> */}
        <div className="heroSt" ref={r1}>
          flair for problem-solving and love for creating efficient and robust
          applications Ensuring excellence leaving no room for mediocrity
        </div>
      </div>
    </div>
  );
};

export default Hero;
