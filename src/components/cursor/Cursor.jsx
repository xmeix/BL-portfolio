import { useContext, useRef } from "react";
import useMousePosition from "./../../hooks/useMousePosition";

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();

  return (
    <div
      className="cursor"
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
        color: "var(--black)",
      }}
    >
      <svg
        id="cursor"
        width={30}
        height={30}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: "translate(-50%, -50%)",
          color: "var(--black)",
        }}
      >
        <circle cx="25" cy="25" r="8" />
      </svg>
    </div>
  );
};

export default Cursor;
