import React from "react";
import image from "../../images/images_sources/Image_source_1.png";
import "../../components/Banner/banner.scss";

function Banner() {
  return (
    <div className="banner">
      <h2>Chez vous, partout et ailleurs</h2>
      <img src={image} alt="fond de la bannière" />
    </div>
  );
}

export default Banner;
