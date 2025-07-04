import useCanvas from "../../hooks/useCanvas";

const Canvas = ({ isErasing }) => {
  const canvasRef = useCanvas(isErasing); // Pass prop to hook
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "auto",
        background: "transparent",
      }}
    />
  );
};


export default Canvas;