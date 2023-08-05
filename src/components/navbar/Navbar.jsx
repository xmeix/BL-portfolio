import { Link, Element } from "react-scroll";
import "./Navbar.css";
import useMousePosition from "../../hooks/useMousePosition";
import { useEffect, useState } from "react";
import { gsap } from "gsap";

export const updateCursorStyleLeave = () => {
  gsap.to("#cursor", {
    duration: 0.1,
    width: 10,
    height: 10,
    border: "none",
    backgroundColor: "black",
    borderRadius: 50,
  });
};
const Navbar = () => {
  const links = [
    { name: "©CodeByMeix", url: "hero" },
    { name: "Work", url: "work" },
    { name: "About", url: "about" },
    { name: "Contact", url: "contact" },
  ];

  const updateCursorStyleEnter = () => {
    gsap.to("#cursor", {
      duration: 0.1,
      width: 40,
      height: 40,
      border: "solid 1px var(--black2)",
      backgroundColor: "transparent",
      borderRadius: 50,
    });
  };



  return (
    <nav className="navbar">
      
      <Link
        className="first-nav link"
        activeClass="active"
        to={links[0].url}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onMouseEnter={(e) => updateCursorStyleEnter()}
        onMouseLeave={(e) => updateCursorStyleLeave()}
      >
        {links[0].name}
      </Link>
      <ul className="second-nav">
        {links
          .filter((l) => l.url !== "hero")
          .map((link, index) => (
            <li key={index}>
              <Link
                className="link"
                activeClass="active"
                to={link.url}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onMouseEnter={(e) => updateCursorStyleEnter()}
                onMouseLeave={(e) => updateCursorStyleLeave()}
              >
                {link.name}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
