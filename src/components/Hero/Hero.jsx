import React from "react";

import Header from "../Header/Header";

import "./Hero.css";

import Lucas from "../../assets/l2.png";
import HeroImage from "../../assets/hero-image-back.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "string", duration: 3 };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "200px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
        <motion.div>
          <motion.img
            initial={{ right: "1rem" }}
            whileInView={{ right: "9rem" }}
            transition={transition}
            className="hero-image-back"
            src={HeroImage}
            alt=""
          />
        </motion.div>
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
