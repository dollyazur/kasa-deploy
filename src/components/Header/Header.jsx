import React from "react";
import image from "../../images/Header-img/Desktop/LOGO.png";

import "../../components/Header/header.scss";

function Header() {
  return (
    <div className="header">
      <img className="header-img" src={image} alt="representation du header" />

      <nav>
        <div className="accueil">
          <a href="/">Accueil</a>
        </div>
        <div className="a-propos">
          <a href="/Propos">A propos</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
