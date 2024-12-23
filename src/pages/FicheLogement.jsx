import React from "react";
import { useParams } from "react-router-dom";
// On importe `useParams` pour récupérer l’id du logement dans l’URL.

import { useFetch } from "../useFetch";
// On importe notre hook personnalisé `useFetch` pour récupérer les données depuis data.json.

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../components/Cards/cards.scss";
import Carousel from "../components/Carousel/Carousel.jsx";
import Collapse from "../components/Collapse/Collapse.jsx";
import "../components/Description/description.scss";

//import "";
// On importe les styles spécifiques pour cette page.

function FicheLogement() {
  //On crée notre composant `FicheLogement`.

  const { id } = useParams();
  // On récupère l’`id` du logement depuis l’URL, par exemple `/housing/1`.

  const { data: cards, error } = useFetch("/data.json");
  // On utilise `useFetch` pour récupérer toutes les cartes (logements) depuis le fichier `data.json`.

  if (error) {
    return <div>Erreur : {error}</div>;
    // Si on rencontre une erreur (par exemple, si data.json n’est pas trouvé), on l’affiche ici.
  }

  if (!cards) {
    return null;
    // Si les données ne sont pas encore arrivées (chargement), on ne montre rien pour l’instant.
  }

  const logement = cards.find((item) => item.id === id);
  // On cherche dans les données le logement qui correspond à l’`id` récupéré.

  if (!logement) {
    return <div>Erreur : Aucun logement trouvé</div>;
    // Si aucun logement avec cet `id` n’est trouvé, on affiche un message d’erreur.
  }

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    tags,
    equipments,
  } = logement;
  // On extrait les données nécessaires du logement trouvé.

  return (
    <div className="fiche-logement">
      {/* Conteneur principal */}
      <Header />

      <div className="fiche-logement__content">
        {/* Conteneur pour le contenu principal de la page */}

        {/* Carrousel */}
        <Carousel pictures={pictures} />
        {/* On affiche le composant `Carousel` en lui passant les images du logement */}

        {/* Informations principales */}
        <div className="fiche-logement__header">
          <div className="fiche-logement__info">
            <h1 className="fiche-logement__title">{title}</h1>

            {/* Afficher la location sous le titre */}
            <p className="fiche-logement__location">{location}</p>

            <div className="fiche-logement__tags">
              {tags.map((tag, index) => (
                <span key={index} className="fiche-logement__tag">
                  {tag}
                </span>
              ))}
              {/* On affiche chaque tag */}
            </div>
          </div>

          {/* Hôte */}
          <div className="fiche-logement__host">
            <p className="fiche-logement__host-name">{host.name}</p>
            <img
              src={host.picture}
              alt={host.name}
              className="fiche-logement__host-picture"
            />
            {/* Affichage de l'hôte */}
          </div>
        </div>

        {/* Note */}
        <div className="fiche-logement__rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`fiche-logement__star ${
                index < rating ? "filled" : "empty"
              }`}
            >
              ★
            </span>
          ))}
          {/* On affiche les étoiles, les `filled` correspondent au `rating`. */}
        </div>

        {/* Collapses */}
        <div className="fiche-logement__collapses">
          <Collapse title="Description">{description}</Collapse>
          {/* On affiche la description dans un collapse */}
          <Collapse title="Équipements">
            <ul>
              {equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
              {/* On affiche chaque équipement dans une liste */}
            </ul>
          </Collapse>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FicheLogement;
