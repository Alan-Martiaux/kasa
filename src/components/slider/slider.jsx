import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const RightArrow = <FontAwesomeIcon icon={faChevronRight} />;
const LeftArrow = <FontAwesomeIcon icon={faChevronLeft} />;

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  console.log("Current = ", current);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  return (
    <div className="Slider">
      {slides.map((pictures, index) => {
        return (
          <div
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && <img src={pictures} alt="" className="11" />}
          </div>
        );
      })}
      <div className="slider__next" onClick={nextSlide}>
        <i className="rightArrow">{RightArrow}</i>
      </div>
      <div className="slider__prev" onClick={prevSlide}>
        <i className="rightArrow">{LeftArrow}</i>
      </div>
    </div>
  );
};

export default Slider;
