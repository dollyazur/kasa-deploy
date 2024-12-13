import React from "react";

import { Link } from "react-router-dom"; // Pour permettre de cliquer sur chaque carte
import { useFetch } from "../../useFetch"; // On importe notre outil pour récupérer les données

import "../Cards/cards.scss";

function Cards() {
  const { data: cards, error } = useFetch("/data.json");
  // On utilise le useFetch pour récupérer les cartes de data.json
  // `data` devient `cards`, et `error` nous dira s’il y a un problème

  if (error) {
    return <div>Erreur : {error}</div>; // Si on a une erreur, on l’affiche
  }

  if (!cards) {
    return null; // Si on n’a pas encore reçu les données, on ne montre rien
  }

  return (
    <div className="cards-container">
      {cards.map(({ id, title, cover }) => (
        // On parcourt chaque carte et on affiche son titre et son image
        <Link to={`/housing/${id}`} key={id} className="card">
          <img src={cover} alt={title} className="card__image" />
          <h2 className="card__title">{title}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
