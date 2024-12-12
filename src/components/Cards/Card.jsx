import React from "react";
import image from "../../images/Thumbnail/Thumb.png";
import "../Cards/cards.scss";

function Cards() {
  return (
    <div className="cards">
      <img src={image} alt="carte fond orange" />
    </div>
  );
}

export default Cards;
