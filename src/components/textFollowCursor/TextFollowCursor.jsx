import React, { useState, useEffect, useRef } from "react";
import "./TextFollowCursor.css"; // Create this file for styling (optional)

const TextFollowCursor = ({ containerRef, containerClassName }) => {
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const posX = e.clientX - containerRect.left;
      const posY = e.clientY - containerRect.top;

      setTextPosition({ x: posX, y: posY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef]);

  return (
    <div
      className={`textFollowCursor ${containerClassName}`}
      ref={containerRef}
    >
      <div
        className="text"
        style={{ left: textPosition.x, top: textPosition.y }}
      >
        Text follows the cursor!
      </div>
    </div>
  );
};

export default TextFollowCursor;
