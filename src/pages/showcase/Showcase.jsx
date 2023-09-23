import React, { useState, useEffect } from "react";
import "./Showcase.css";

const titles = [
  "Hello",
  "I am",
  "Lamia",
  "Known by",
  "Meix",
  "I am A",
  "Software",
  "Engineer,",
  "A Web",
  "Developer,",
  "And from",
  "Now on,",
  "I am your",
  "Favourite",
  "Art maker.",
];

const Showcase = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the title index, looping back to the start if we reach the end
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="showcase">
      <div className="showcase-inner">
        <div className="showcase-text">{titles[currentTitleIndex]}</div>
      </div>
    </div>
  );
};

export default Showcase;
