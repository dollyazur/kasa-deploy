import React from "react";
import image from "../../images/erreur_404/404.png";
import "../Error_404/error_404.scss";

function Error_404() {
  return (
    <div className="error_404">
      <img src={image} alt="404 en orange" />
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <a href="/Home">Retourner sur la page d'accueil</a>
    </div>
  );
}

export default Error_404;
