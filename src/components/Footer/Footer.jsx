import React from "react";

import "./Footer.css";

import Logo from "../../assets/logo-removebg-preview.png";

function Footer() {
  return (
    <div className="footer-container">
      <hr />

      <div className="right-fo">
        <img src={Logo} alt="" />
        <div className="blur footer-blur"></div>
      </div>
    </div>
  );
}

export default Footer;
