import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);
  const [colorSet, setColorSet] = useState(false);

  const rubberBand = () => {
    controls.start({
      scaleX: [1, 1.08, 0.96, 1.04, 0.98, 1],
      scaleY: [1, 0.94, 1.04, 0.98, 1.01, 1],
      color: colorSet ? "#fbfbfb" : "#8f5aff",
      transition: {
        duration: 0.6,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        ease: "easeInOut",
      },
    });
    setIsPlaying(true);
    setColorSet(!colorSet);
  };

  return (
    <motion.span
      animate={controls}
      style={{
        fontSize: "7vw",
        fontWeight: "800",
        textAlign: "center",
        textTransform: "uppercase",
        cursor: "default",
        display: "inline-block", // Needed for transform to work!
      }}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
};

export default TextSpan;
