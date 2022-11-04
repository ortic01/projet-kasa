import React from "react";

const Herobanner = ({ image, title }) => {
  return (
    <div className="thumb1">
      <img src={image} alt="" className="thumb__img1" />
      <div className="thumb__overlay1"></div>
      <h2 className="thumb__title1">{title}</h2>
    </div>
  );
};

export default Herobanner;

