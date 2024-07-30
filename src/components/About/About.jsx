import React, { useState } from "react";
import "./About.css";
import { aboutData } from "../../data/aboutData";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const flenght = aboutData.length;

  return (
    <div className="about" id="about">
      <div className="left-a">
        <span>Um pouco da</span>
        <span className="stoke-text">MINHA História</span>
        <span>{aboutData[selected].review}</span>
        <span> {aboutData[selected].status}</span>
      </div>
      <div className="right-a">
        <div></div>
        <div></div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={aboutData[selected].image}
          alt=""
        />
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
