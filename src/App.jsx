import { Element } from "react-scroll";
import "./App.css";
import Navbar from "./components/navbar/Navbar"; 
import { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import UnderConstruction from "./components/underconstruction/UnderConstruction";

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
 
      {!responsive && <Navbar />}
      <Element name="hero">
       <UnderConstruction/>
      </Element>
      
    </div>
  );
}

export default App;
