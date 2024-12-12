import React from "react";
import "../../components/Banner/banner.scss";

function Banner({ image, text }) {
  return (
    <div className="banner">
      {text && <h2>{text}</h2>}{" "}
      {/* Affiche le h2 uniquement si le texte est défini */}
      <img src={image} alt="fond de la bannière" />
    </div>
  );
}

export default Banner;
