import React from "react";

import Header from "../components/Header/Header.jsx";
import "../components/Banner/banner.scss";
import AProposimg from "../images/images_sources/Image_source_2.png";
import Footer from "../components/Footer/Footer.jsx";

function APropos() {
  return (
    <div>
      <Header />
      <img src={AProposimg} alt="paysage de la banniere" />
      <Footer />
    </div>
  );
}

export default APropos;
