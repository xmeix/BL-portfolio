import { Element } from "react-scroll";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Work from "./components/work/Work";
import Cursor from "./components/cursor/Cursor";
import { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

function App() {
  // -------------------------------------------------------------
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [responsive, setResponsive] = useState(false);
  //____________________________________________________
  useEffect(() => {
    function handleWindowResize() {
      if (getWindowSize().innerWidth <= 892) {
        setResponsive(true);
      } else setResponsive(false);
    }
    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  //____________________________________________________
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  //____________________________________________________
  const ChangeBackground = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  //____________________________________________________

  window.addEventListener("scroll", ChangeBackground);
  // -------------------------------------------------------------

  const handleMenu = () => {
    setIsOpen(true);
  };
  const handleHideMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="app">
      <Cursor />
      {!isOpen && responsive && (
        <div className="hamMenu-container" onClick={handleMenu}>
          <MenuRoundedIcon className="hamMenu"   />
        </div>
      )}
      {!responsive && <Navbar />}
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      <Element name="about">
        <About />
      </Element>
    </div>
  );
}

export default App;
