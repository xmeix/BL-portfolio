import { useEffect, useRef } from "react";

const useCanvas = () => {
  const canvasRef = useRef(null);
  const drawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    let fadeAnimation;

    // Set canvas size to match its displayed size
    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const context = canvas.getContext("2d");
    let lastX = 0;
    let lastY = 0;

    const startDrawing = (e) => {
      drawing.current = true;
      const rect = canvas.getBoundingClientRect();
      lastX = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      lastY = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    };
    const draw = (e) => {
      if (!drawing.current) return;

      const rect = canvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
      context.save();
      context.strokeStyle = "#8f5aff"; // Neon violet
      context.shadowColor = "#8f5aff";
      context.shadowBlur = 16;
      context.lineWidth = 10;
      context.lineCap = "round";
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(x, y);
      context.stroke();
      context.restore();
      lastX = x;
      lastY = y;
    };

    const stopDrawing = () => {
      drawing.current = false;
    };
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);

    canvas.addEventListener("touchstart", startDrawing);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", stopDrawing);
    const fade = () => {
      context.save();
      context.globalAlpha = 0.09; // Lower = slower fade, higher = faster fade
      context.fillStyle = "#1d1d1d";
      context.shadowColor = "none";
      context.shadowBlur = 2;
      context.shadowOffsetX = 5;
      context.shadowOffsetY = 5;

      context.fillRect(0, 0, canvas.width, canvas.height);
      context.restore();
      fadeAnimation = requestAnimationFrame(fade);
    };
    fade();
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseleave", stopDrawing);
      canvas.removeEventListener("touchstart", startDrawing);
      canvas.removeEventListener("touchmove", draw);
      canvas.removeEventListener("touchend", stopDrawing);
      cancelAnimationFrame(fadeAnimation);
    };
  }, []);

  return canvasRef;
};

export default useCanvas;
