import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/lucaslogo.png";
import BarsMenu from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={BarsMenu}
            alt=""
            style={{ width: "1.3rem", height: "1.3rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="hero"
              spy={true}
              smooth={true}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="metodology"
              spy={true}
              smooth={true}
            >
              Metodologia
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="about"
              spy={true}
              smooth={true}
            >
              Sobre
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="results"
              spy={true}
              smooth={true}
            >
              Resultados
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Planos
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="feedback"
              spy={true}
              smooth={true}
            >
              Feedback
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="join"
              spy={true}
              smooth={true}
            >
              Entrar no time
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
