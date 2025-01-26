import React from "react";
import image from "./11062b_fc9864beff91463a8216e79673678724~mv2.avif";
import "./section.css";

const Section = () => {
  return (
    <div className="section-container">
      <div className="section-content">
        <div className="section-text">
          <h1>GROW TOGETHER</h1>
          <p>Placements and HR Services</p>
        </div>
        <div className="section-image">
          <img src={image} alt="Grow Together" className="section-image-img" />
        </div>
      </div>
    </div>
  );
};

export default Section;
