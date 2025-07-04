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
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="showcase" style={{ position: "relative" }}>
      {/* Pass isErasing as prop */}
      <Canvas isErasing={isErasing} />
      <button
        className="eraser-btn"
        style={{
          margin: "0 2.5em",
          position: "absolute",
          bottom: 20,
          right: 20,
          zIndex: 2,
          padding: "16px",
          background: "transparent",
          fontSize: "1.2rem",
          border: "none",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(-1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(100%)";
        }}
        onClick={() => setIsErasing((prev) => !prev)}
      >
        {isErasing ? "🎨" : "🧽"}
      </button>
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
