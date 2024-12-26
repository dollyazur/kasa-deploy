import React from "react";
import "../styles/main.scss";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";

import image2 from "../images/images_sources/Image_source_2.png";
import Footer from "../components/Footer/Footer.jsx";
import Collapse from "../components/Collapse/Collapse.jsx";

export const aboutList = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function Propos() {
  return (
    <div className="Propos">
      <Header />

      <Banner image={image2} />
      <div className="Propos__collapses">
        {aboutList.map((item, index) => (
          <Collapse key={index} title={item.title}>
            {item.content}
          </Collapse>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Propos;
