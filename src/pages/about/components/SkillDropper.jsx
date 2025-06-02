import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const SkillDropper = ({ skills }) => {
  const [dropped, setDropped] = useState([]);

  const handleDrop = () => {
    if (dropped.length < skills.length) {
      setDropped([...dropped, skills[dropped.length]]);
    }
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
        }}
        onClick={handleDrop}
        aria-label="Drop a skill"
      >
        <AnimatePresence>
          {dropped.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 60, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              style={{
                position: "absolute",
                left: 20 + idx * 55,
                top: 0,
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: 8,
                padding: "8px 16px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                pointerEvents: "none",
              }}
            >
              {skill}
            </motion.div>
          ))}
        </AnimatePresence>
      </button>
      <div>Click the box to drop a skill!</div>
    </div>
  );
};

export default SkillDropper;
