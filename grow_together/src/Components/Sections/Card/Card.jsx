import React from "react";
import { FaGraduationCap, FaHandshake, FaUsers, FaChalkboardTeacher, FaDollarSign } from "react-icons/fa"; 
import "./card.css";

function Card() {
  return (
    <div className="container">
      <h1>Why Choose Grow Together?</h1>
      <div className="card-container">
        <div className="card">
          <FaHandshake className="card-icon" />
          <h3>Placement Assistance</h3>
        </div>
        <div className="card">
          <FaChalkboardTeacher className="card-icon" />
          <h3>Providing Interview Skills</h3>
        </div>
        <div className="card">
          <FaGraduationCap className="card-icon" />
          <h3>Quality Education</h3>
        </div>
        <div className="card">
          <FaUsers className="card-icon" />
          <h3>Experienced Faculties</h3>
        </div>
        <div className="card">
          <FaDollarSign className="card-icon" />
          <h3>Affordable Fees</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
