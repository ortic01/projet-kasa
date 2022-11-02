import React from "react";
import { useState } from "react";


import arrowLeft from "../design/arrowLeft.svg";
import arrowRight from "../design/arrowRight.svg";


function Caroussel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="caroussel">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide caroussel__active-picture"
                : "slide caroussel__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="caroussel__picture" />
            )}
          </div>
        );
      })}
      
      {length > 1 ? (
        <>
          <div className="caroussel__previous" onClick={prevSlide}>
          <p className="length-indicatif">{current+1}/{length}</p>
          <img src={arrowLeft} alt="" className="caroussel__previous-icon" />
          </div>
          <div className="caroussel__next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="caroussel__next-icon" />
          </div>
        </>
      ) : null}
    </div>
    
    
  );
};

export default Caroussel;
