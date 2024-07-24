import React from "react";

import Header from "../Header/Header";

import "./Hero.css";

import Lucas from "../../assets/l2.png";
import HeroImage from "../../assets/hero-image-back.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>O melhor programa para você</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stoke-text">Alcance </span>
            <span>Seu</span>
          </div>
          <div>
            <span>Corpo Ideal </span>
          </div>
          <div>
            <span>
              Ajudo meus alunos a adotarem um estilo de vida saudável e a
              alcançarem suas melhores versões. Vamos manter a forma juntos!
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+15</span>
            <span>Alunos</span>
          </div>
          <div>
            <span>+7</span>
            <span>Atletas</span>
          </div>
          <div>
            <span>+130</span>
            <span>Vidas transformadas</span>
          </div>
        </div>

        <div className="hero-button">
          <button className="btn">Saber Mais</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Entre em contato</button>

        <img className="hero-image-back" src={HeroImage} alt="" />
        <img className="hero-image" src={Lucas} alt="" />

        <div className="description">
          <div className="description-name">
            <span>Coach e Atleta</span>
            <span>Lucas Neri</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
