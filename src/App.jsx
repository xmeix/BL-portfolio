import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import Showcase from "./pages/showcase/Showcase";

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
      <Navbar />
      <Showcase />
    </div>
  );
}

export default App;
