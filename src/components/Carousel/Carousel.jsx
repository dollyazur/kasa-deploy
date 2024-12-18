import React from "react";

function Carousel({ pictures }) {
  return (
    <div className="carousel">
      {/* Affiche les images */}
      {pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={`Vue ${index + 1} du carrousel`}
          className="carousel__image"
        />
      ))}
    </div>
  );
}

export default Carousel;
