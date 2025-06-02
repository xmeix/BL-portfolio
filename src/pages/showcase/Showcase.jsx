import { useEffect, useState } from "react";
import Canvas from "../../components/canvas/Canvas";
import TextSpan from "../../components/textSpan/TextSpan";
import "./Showcase.css";

const titles = [
  "Welcome!",
  "I'm",
  "Lamia BOUALOUACHE,",
  "Also known as",
  "Meix.",
  "A passionate",
  "Software Engineer",
  "Creative Web Developer,",
  "Innovator at heart,",
  "Explorer of ideas,",
  "From now on,",
  "Let me be your",
  "Inspiration.",
  "Let's create art together.",
];

const Showcase = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="showcase" style={{ position: "relative" }}>
      <Canvas />
      <div
        className="showcase-inner"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div key={currentTitleIndex}>
          {titles[currentTitleIndex].split("").map((letter, i) => {
            const key = `${letter}-${i}`;
            return (
              <TextSpan key={key}>
                {letter === " " ? "\u00A0" : letter}
              </TextSpan>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
