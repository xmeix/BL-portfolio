import { useEffect, useRef } from "react";

const useCanvas = (isErasing = false) => {
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const erasingRef = useRef(isErasing);

  useEffect(() => {
    erasingRef.current = isErasing;
  }, [isErasing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const abortController = new AbortController();
    const { signal } = abortController;
    let fadeAnimation;

    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize, { signal });

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

      if (erasingRef.current) {
        context.globalCompositeOperation = "destination-out";
        context.strokeStyle = "rgba(0,0,0,1)";
        context.lineWidth = 30;
        context.shadowBlur = 0;
      } else {
        context.globalCompositeOperation = "source-over";
        context.strokeStyle = "#9cdcfe";
        context.shadowColor = "#9cdcfe";
        context.shadowBlur = 0;
        context.lineWidth = 20;
      }

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

    // Helper to add event listeners with abort signal
    const addEvent = (type, handler, opts = {}) => {
      canvas.addEventListener(type, handler, { ...opts, signal });
    };

    addEvent("mousedown", startDrawing);
    addEvent("mousemove", draw);
    addEvent("mouseup", stopDrawing);
    addEvent("mouseleave", stopDrawing);

    addEvent("touchstart", startDrawing);
    addEvent("touchmove", draw);
    addEvent("touchend", stopDrawing);

    const fade = () => {
      context.save();
      context.globalAlpha = 0.09;
      context.fillStyle = "#1d1d12";
      context.shadowColor = "#1d1d12";
      context.shadowOffsetX = 5;
      context.shadowOffsetY = 5;

      context.globalCompositeOperation = "source-over";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.restore();
      fadeAnimation = requestAnimationFrame(fade);
    };
    fade();

    return () => {
      abortController.abort();
      cancelAnimationFrame(fadeAnimation);
    };
  }, []);

  return canvasRef;
};

export default useCanvas;
