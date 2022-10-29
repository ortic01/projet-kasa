import React from "react";

import Vector from "../design/Vector.png"

  
function Accordeon ({ title, content }) {
  const isAccordeon = (e) => {
    e.preventDefault();
    const divText = e.target.nextSibling;
    const arrow = e.target.lastChild;

    if (!divText.classList.contains("show")) {
      divText.classList.add("show");
      arrow.classList.add("rotate");
    } else {
      divText.classList.remove("show");
      arrow.classList.remove("rotate");
    }
  };
  return (
    <div className="accordeon ">
      <button type="button" className="accordeon__button" onClick={isAccordeon}>
        {title}

        <p className="accordeon__arrow"><img src={Vector} alt="" className="Vector.png" /></p>
      </button>
      <div className="accordeon__content">
        {Array.isArray(content) ? (
          <ul className="accordeon__list">
            {content.map((equipment, index) => (
              <li key={index} className="accordeon__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="accordeon__text">{content}</p>
        )}
      </div>
    </div>
  );
};
export default Accordeon;