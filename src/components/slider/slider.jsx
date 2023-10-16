import React from "react";
import { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
//import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

//import Right from "../../asset/rightArrow.svg";

//const RightArrow = <FontAwesomeIcon icon={faChevronRight} />;
//const LeftArrow = <FontAwesomeIcon icon={faChevronLeft} />;

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  console.log("Current = ", current, "/", length);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  return (
    <div className="slider">
      {slides.map((pictures, index) => {
        return (
          <div
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <img src={pictures} alt="" className="slidePicture" />
            )}
          </div>
        );
      })}
      <div id="sliderArrow">
        <h3 className="arrow leftArrow" onClick={prevSlide}>
          {"<"}
        </h3>{" "}
        <h3 onClick={nextSlide} className="arrow rightArrow">
          {">"}
        </h3>
        <p className="slideInfo">
          {current + 1} / {length}
        </p>
      </div>
    </div>
  );
};

export default Slider;
