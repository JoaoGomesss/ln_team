import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import "./Results.css";

import image1 from "../../assets/d3.jpg";
import image2 from "../../assets/3.jpg";
import image3 from "../../assets/1.jpg";
import image4 from "../../assets/2.jpg";

function Results() {
  const [slidePerview, setSlidePerView] = useState(1);

  const resultsImages = [
    { id: "2", image: image2, description: "Brunno Puonzo" },
    { id: "1", image: image1, description: "Davi Freitas" },
    { id: "4", image: image4, description: "Eduardo Cavalcante" },
    { id: "3", image: image3, description: "João Gomes" },
  ];
  return (
    <div className="results">
      <div className="left-r">
        <Swiper
          className="swiper-container"
          slidesPerView={slidePerview}
          navigation
          style={{ "--swiper-pagination-color": "#FFBA08" }}
        >
          {resultsImages.map((item) => (
            <SwiperSlide className="swiper-slide" key={item.id}>
              <div className="slide-content">
                <img
                  src={item.image}
                  alt={item.description}
                  className="slide-item"
                />
                <span className="slide-description">{item.description}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div />
      </div>

      <div className="right-r">
        <span>ALGUNS DOS </span>
        <div>
          <span className="stoke-text">Resultados</span>
          <span> dos Alunos</span>

          <div className="details-r">
            <div>
              <IoMdCheckmarkCircleOutline style={{ color: "#2a62fdfd" }} />
              <span>Planejamento estratégico</span>
            </div>
            <div>
              <IoMdCheckmarkCircleOutline style={{ color: "#2a62fdfd" }} />
              <span>Acompanhamento Semanal</span>
            </div>
            <div>
              <IoMdCheckmarkCircleOutline style={{ color: "#2a62fdfd" }} />
              <span>Dieta individualizada</span>
            </div>
            <div>
              <IoMdCheckmarkCircleOutline style={{ color: "#2a62fdfd" }} />
              <span>Treino focado no seu objetivo </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
