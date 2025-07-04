import "./Work.css";
import Titles from "../../components/titles/Titles";
import Project from "../../components/project/Project";
import { useState } from "react";
import CarouselButtons from "./carouselButtons/CarouselButtons";
import { gallery } from "../../media/data/data";

const Work = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handlePrev = (e) => {
    e.preventDefault();
    // Logic for previous button
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
    console.log("Previous button clicked");
  };
  const handleNext = (e) => {
    e.preventDefault();
    // Logic for next button
    setCarouselIndex((prev) => {
      console.log(prev, gallery.length);
      return prev === gallery.length - 1 ? 0 : prev + 1;
    });

    console.log("Next button clicked");
  };

  return (
    <div className="work">
      <Titles title1={"check out my"} title2={"recent projects"} />
      <div className="projects-carousel">
        <CarouselButtons
          handlePrev={handlePrev}
          handleNext={handleNext}
          carouselIndex={carouselIndex}
        />
        <div className="projects-list">
          {gallery[carouselIndex]?.items.map((project, index) => (
            <Project
              key={index}
              id={index}
              title={project.title}
              backgroundImg={project.backgroundImg}
              url={project.url}
              backgroundVideo={project.backgroundVideo}
              
            />
          ))}
        </div>
        <CarouselButtons
          handlePrev={handlePrev}
          handleNext={handleNext}
          carouselIndex={carouselIndex}
        />
      </div>
    </div>
  );
};

export default Work;
