import React from "react";
import { useState } from "react";
import right from "../../asset/right.png";
import rightMobile from "../../asset/rightMobile.png";
import left from "../../asset/left.png";
import leftMobile from "../../asset/leftMobile.png";

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
  if (length > 1) {
    return (
      <div className="slider">
        {slides.map((pictures, index) => {
          return (
            <div
              key={index}
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
            <img src={left} alt="Flêche gauche" />
          </h3>{" "}
          <h3 onClick={nextSlide} className="arrow rightArrow">
            <img src={right} alt="Flêche Droite" />
          </h3>
          <p className="slideInfo">
            {current + 1} / {length}
          </p>
        </div>
        <div id="sliderArrowMobile">
          <h3 className="arrow leftArrowMobile" onClick={prevSlide}>
            <img src={leftMobile} alt="Flêche gauche" />
          </h3>{" "}
          <h3 onClick={nextSlide} className="arrow rightArrowMobile">
            <img src={rightMobile} alt="Flêche Droite" />
          </h3>
          <p className="slideInfo">
            {current + 1} / {length}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="slider">
        {slides.map((pictures, index) => {
          return (
            <div
              key={index}
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
      </div>
    );
  }
};

export default Slider;
