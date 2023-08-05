import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const [colorSet, setColorSet] = useState(false);
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1,1,13)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,0.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      color: colorSet ? "var(--black)" : "var(--violet)",
    });
    setIsPlaying(true);
    setColorSet(!colorSet);
  };

  return (
    <motion.span
      animate={controls}
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
