import React from "react";

import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";

import image2 from "../images/images_sources/Image_source_2.png";
import Footer from "../components/Footer/Footer.jsx";

function Apropos() {
  return (
    <div className="Apropos">
      <Header />

      <Banner image={image2} />

      <Footer />
    </div>
  );
}

export default Apropos;
