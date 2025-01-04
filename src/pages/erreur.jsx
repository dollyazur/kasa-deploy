import React from "react";
import "../styles/main.scss";
import Header from "../components/Header/Header.jsx";
import Error404 from "../components/Error_404/Error_404.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Erreur() {
  return (
    <div>
      <div className="erreur__content">
        <Header />
        <Error404 />
      </div>
      <Footer />
    </div>
  );
}

export default Erreur;
