import React from "react";

import Header from "../Header/Header";

import "./Hero.css";

import Lucas from "../../assets/l2.png";
import HeroImage from "../../assets/hero-image-back.png";
import Insta from "../../assets/instagram.png";
import Whats from "../../assets/whatsapp.png";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "string", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "140px" : "200px" }}
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
            <span>
              <NumberCounter end={15} start={0} delay="4" preFix="+" />
            </span>
            <span>Alunos</span>
          </div>
          <div>
            <span>
              <NumberCounter end={7} start={0} delay="4" preFix="+" />
            </span>
            <span>Atletas</span>
          </div>
          <div>
            <span>
              <NumberCounter end={130} start={50} delay="4" preFix="+" />
            </span>
            <span>Transformações</span>
          </div>
        </div>

        <div className="hero-button">
          <Link
            to="join"
            spy={true}
            smooth={true}
            style={{
              width: "fit-content",
              color: "white",
              backgroundColor: "#0245ff",
              marginTop: "15px",
              borderRadius: "3rem",
              transition: "all 500ms ease",
            }}
          >
            <button className="btn">Saber Mais</button>
          </Link>
        </div>
      </div>
      <div className="right-h">
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "6.5rem" }}
          transition={transition}
          className="hero-social"
        >
          <a
            href="https://linktr.ee/lnteam?utm_source=linktree_profile_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Insta} alt="Instagram" />
          </a>
          <a
            href="https://linktr.ee/lnteam?utm_source=linktree_profile_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whats} alt="WhatsApp" />
          </a>
        </motion.div>
        {/* <button className="btn">
          <a style={{ textDecoration: "none", color: "white" }} href="#join">
            Entre em contato
          </a>
        </button> */}
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
