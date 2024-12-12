import React from "react";
import image from "../../images/Header-img/Desktop/LOGO.png";

import "../../components/Header/header.scss";

function Header() {
  return (
    <div className="header">
      <img src={image} alt="representation du header" />
      <div class="a-propos-accueil">
        <a href="/">Accueil</a>
        <a href="/Propos">A propos</a>
      </div>
    </div>
  );
}

export default Header;
