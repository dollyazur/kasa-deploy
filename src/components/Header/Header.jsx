import React from "react";
import image from "../../images/Header-img/Desktop/Active_Accueil.png";
import "../../components/Header/header.scss";

function Header() {
  return (
    <div className="header">
      <img src={image} alt="representation du header" />
    </div>
  );
}

export default Header;
