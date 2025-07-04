import { Link } from "react-router-dom";
import "./Project.css";
import { useState } from "react";

const Project = ({ id, title, backgroundImg, url, backgroundVideo }) => {
  const [hovered, setHovered] = useState(false);

  const onHover = (param) => {
    setHovered(param);
  };

  const videoId = backgroundVideo?.split("/embed/")[1]?.split("?")[0];
  const controls = `?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0`;

  return (
    <a
      className="project"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ alignSelf: id % 2 === 0 ? "flex-start" : "flex-end" }}
    >
      <div className="project-title">
        <h3>{title}</h3>
      </div>

      {backgroundVideo ? (
        <div
          className="project-video"
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
        >
          {hovered ? (
            <iframe
              width="100%"
              height="100%"
              src={backgroundVideo + controls}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={
                backgroundImg
                  ? backgroundImg
                  : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              }
              alt={title}
              className="project-image"
            />
          )}
        </div>
      ) : (
        <img src={backgroundImg} alt={title} className="project-image" />
      )}
    </a>
  );
};

export default Project;
