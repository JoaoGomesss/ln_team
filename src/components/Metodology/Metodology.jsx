import React from "react";
import "./Metodology.css";
import { metodologyData } from "../../data/metodologyData";

function Metodology() {
  return (
    <div className="metodology" id="metodology">
      <div className="metodology-header">
        <span className="stoke-text">Metodologia </span>
        <span>Que gera </span>
        <span className="stoke-text">Transformação</span>
      </div>

      <div className="metodology-categories">
        {metodologyData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Metodology;
