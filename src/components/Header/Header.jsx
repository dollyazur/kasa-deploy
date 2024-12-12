import React from "react";
import image from "../../images/Header-img/Desktop/LOGO.png";
import image1 from "../../images/Header-img/Desktop/Accueil.png";
import image2 from "../../images/Header-img/Desktop/A Propos.png";
import "../../components/Header/header.scss";

function Header() {
  return (
    <div className="header">
      <img src={image} alt="representation du header" />
      <div class="a-propos-accueil">
        <img src={image1} alt="representation du header" />
        <img src={image2} alt="representation du header" />
      </div>
    </div>
  );
}

export default Header;
