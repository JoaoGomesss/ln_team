import React from "react";
import "./Join.css";

import GoodForm from "../Form/Form";

function Join() {
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stoke-text">Está pronto </span>
          <span>para alcançar</span>
        </div>
        <div>
          <span>sua </span>
          <span className="stoke-text"> melhor versão?</span>
        </div>
      </div>
      <div className="right-j">
        <GoodForm />
      </div>
    </div>
  );
}

export default Join;
