import React from "react";
import "./Header.css";
import Logo from "../../assets/lucaslogo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      <ul className="header-menu">
        <li>Início</li>
        <li>Programas</li>
        <li>Resultados</li>
        <li>Planos</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
};

export default Header;
