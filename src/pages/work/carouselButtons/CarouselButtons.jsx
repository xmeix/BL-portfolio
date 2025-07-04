import { gallery } from "../../../media/data/data";
import arrow from "./../../../media/right_arrow.svg";
import "./CarouselButtons.css";


const CarouselButtons = ({ handlePrev, handleNext, carouselIndex }) => {
  return (
    <div className="carousel-buttons">
      <button className="carousel-button prev" onClick={handlePrev}>
        <img src={arrow} alt="" className="left arrow-btn" />
      </button>
      <h2 className="section-title">{gallery[carouselIndex]?.section}</h2>
      <button className="carousel-button next" onClick={handleNext}>
        <img src={arrow} alt="" className="right arrow-btn" />
      </button>
    </div>
  );
};

export default CarouselButtons;
