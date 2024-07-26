import React, { useState } from "react";
import "./About.css";
import { aboutData } from "../../data/aboutData";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function About() {
  const [selected, setSelected] = useState(0);
  const flenght = aboutData.length;

  return (
    <div className="about">
      <div className="left-t">
        <span>Um pouco da</span>
        <span className="stoke-text">MINHA História</span>
        <span>{aboutData[selected].review}</span>
        <span>
          <span> {aboutData[selected].status}</span>
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={aboutData[selected].image} alt="" />
        <div className="arrows">
          <FaArrowLeft
            style={{ color: "rgba(255, 255, 255, 0.712)" }}
            onClick={() =>
              selected === 0
                ? setSelected(flenght - 1)
                : setSelected((prev) => prev - 1)
            }
          />
          <FaArrowRight
            onClick={() =>
              selected === flenght - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;
