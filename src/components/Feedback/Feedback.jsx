import React, { useState } from "react";
import "./Feedback.css";
import { feedbackData } from "../../data/feedbackData";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Feedback() {
  const [selected, setSelected] = useState(0);
  const flenght = feedbackData.length;

  return (
    <div className="feedback">
      <div className="left-t">
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
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={feedbackData[selected].image} alt="" />
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
