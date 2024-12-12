import React from "react";

import Header from "../components/Header/Header.jsx";
import Error404 from "../components/Error_404/Error_404.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Erreur() {
  return (
    <div>
      <Header />
      <Error404 />
      <Footer />
    </div>
  );
}

export default Erreur;
