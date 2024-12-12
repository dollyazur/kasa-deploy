import React from "react";
import image from "../../images/Thumbnail/Thumbnail.png";
import "../Cards/cards.scss";

function Cards() {
  return (
    <div className="cards">
      <img src={image} alt="carte fond orange" />
    </div>
  );
}

export default Cards;
