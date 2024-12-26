import React from "react";
import "../styles/main.scss";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Cards from "../components/Cards/Card.jsx";
import Footer from "../components/Footer/Footer.jsx";
import image1 from "../images/images_sources/Image_source_1.png";

function Home() {
  return (
    <div>
      <Header />

      <Banner image={image1} text="Chez vous, partout et ailleurs" />

      <Cards />

      <Footer />
    </div>
  );
}

export default Home;
