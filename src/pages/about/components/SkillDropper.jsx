import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const getRandom = (min, max) => Math.random() * (max - min) + min;

const SkillDropper = ({ skills }) => {
  const [dropped, setDropped] = useState([]);
  const [randoms, setRandoms] = useState([]);
  const [positions, setPositions] = useState({});
  const [dragging, setDragging] = useState({}); // Track which skill is being dragged

  const handleDrop = () => {
    if (dropped.length < skills.length) {
      setDropped([...dropped, skills[dropped.length]]);
      setRandoms([
        ...randoms,
        {
          x: getRandom(10, 220),
          rot: getRandom(-40, 40),
          y: getRandom(60, 90),
        },
      ]);
    }
  };

  const handleDrag = (e, info, skill) => {
    setDragging((prev) => ({ ...prev, [skill]: true }));
    setPositions((prev) => ({
      ...prev,
      [skill]: info.point.y - e.target.getBoundingClientRect().top,
    }));
  };

  const handleDragEnd = (e, info, idx, skill) => {
    setDragging((prev) => ({ ...prev, [skill]: false }));
    setPositions((prev) => ({
      ...prev,
      [skill]: randoms[idx]?.y ?? 90,
    }));
  };

  return (
    <div>
      <button
        type="button"
        style={{
          position: "relative",
          height: 120,
          width: 300,
          background: "#f0f0f0",
          marginBottom: 16,
          overflow: "hidden",
          border: "none",
          cursor: "pointer",
          padding: 0,
          borderRadius: "0 0 40px 40px/0 0 80px 80px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        }}
        onClick={handleDrop}
        aria-label="Drop a skill"
      >
<AnimatePresence>
  {dropped.map((skill, idx) => {
    const endX = randoms[idx]?.x ?? 50;
    const endRot = randoms[idx]?.rot ?? 0;
    const endY = randoms[idx]?.y ?? 90;

    return (
<motion.div
  key={skill}
  initial={{
    y: -100,
    x: getRandom(120, 180),
    rotate: getRandom(-60, 60),
    opacity: 0,
  }}
  animate={{
    y: endY,
    x: endX,
    rotate: endRot,
    opacity: 1,
  }}
  transition={{
    y: {
      type: "tween",
      ease: [0.4, 0.01, 1, 1],
      duration: 0.25,
      delay: idx * 0.04,
    },
    x: {
      type: "tween",
      duration: 0.25,
      delay: idx * 0.04,
    },
    rotate: {
      type: "tween",
      duration: 0.25,
      delay: idx * 0.04,
    },
    opacity: { duration: 0.15, delay: idx * 0.04 },
  }}
  exit={{ opacity: 0 }}
  drag="y"
  dragMomentum={false}
  dragElastic={0.3}
  dragConstraints={{ top: -100, bottom: endY }}
  onDragEnd={(e, info) => {
    // This will snap back to endY automatically
  }}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: "1.2rem",
    pointerEvents: "auto",
    userSelect: "none",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: 8,
    padding: "8px 16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.13)",
    cursor: "grab",
  }}
  whileDrag={{ scale: 1.1, zIndex: 2 }}
>
  {skill}
</motion.div>
    );
  })}
</AnimatePresence>
      </button>
      <div>Click the jar to drop a skill! (You can drag them up, they'll fall back down!)</div>
    </div>
  );
};

export default SkillDropper;