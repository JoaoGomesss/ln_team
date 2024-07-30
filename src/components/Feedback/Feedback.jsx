import React, { useState } from "react";
import "./Feedback.css";
import { feedbackData } from "../../data/feedbackData";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

function Feedback() {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const flenght = feedbackData.length;

  return (
    <div className="feedback" id="feedback">
      <div className="left-f">
        <span>Feedbacks</span>
        <span className="stoke-text">Depoimento</span>
        <span>dos alunos</span>
        <span>{feedbackData[selected].review}</span>
        <span>
          <span style={{ color: "#2a62fdfd" }}>
            {feedbackData[selected].name}
          </span>
          <span> - {feedbackData[selected].status}</span>
        </span>
      </div>
      <div className="right-f">
        <div></div>
        <div></div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={feedbackData[selected].image}
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

export default Feedback;
