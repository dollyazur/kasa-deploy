import React, { useState } from "react";
// On utilise React pour créer notre carrousel, et `useState` pour savoir quelle image on regarde.
import "./carousel.scss";
import arrowLeft from "../../images/Carrousel_ex/arrow_left.png";
import arrowRight from "../../images/Carrousel_ex/arrow_right.png";
import arrowLeftPetit from "../../images/Carrousel_ex/arrow_left-24px.png";
import arrowRightPetit from "../../images/Carrousel_ex/arrow_right_24px.png";

function Carousel({ pictures }) {
  // Le carrousel reçoit une liste d'images (pictures) depuis le fichier data.json.

  const [currentIndex, setCurrentIndex] = useState(0);
  // On garde en mémoire l'index (la position) de l'image qu'on regarde actuellement.

  const totalPictures = pictures.length;
  // On compte combien d'images il y a au total

  const prevSlide = () => {
    // Quand on clique sur la flèche gauche (précédente) :
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPictures - 1 : prevIndex - 1
    );
    // Si on est à la première image, on revient à la dernière.
    // Sinon, on recule d'une image.
  };

  const nextSlide = () => {
    // Quand on clique sur la flèche droite (suivante) :
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPictures - 1 ? 0 : prevIndex + 1
    );
    // Si on est à la dernière image, on revient à la première.
    // Sinon, on avance d'une image.
  };

  return (
    <div className="carousel">
      {/* Image principale */}
      <img
        src={pictures[currentIndex]}
        alt={`Vue ${currentIndex + 1}`}
        className="carousel__image"
        // On affiche l'image qui correspond à l'index actuel.
      />

      {/* Compteur d'images */}
      <div className="carousel__counter">
        {currentIndex + 1}/{totalPictures}
        {/* On montre la photo actuelle et le total, comme 2/4 */}
      </div>

      {totalPictures > 1 && (
        // Si on a plus d'une image, on montre les flèches pour naviguer.
        <>
          <button
            className="carousel__arrow carousel__arrow--left"
            onClick={prevSlide}
          >
            <img src={arrowLeft} alt="Précédente" />
            {/* Flèche gauche : affiche l'image de la flèche */}
          </button>

          <button
            className="carousel__arrow carousel__arrow--right"
            onClick={nextSlide}
          >
            <img src={arrowRight} alt="Suivante" />
            {/* Flèche droite : affiche l'image de la flèche */}
          </button>

          <button
            className="carousel__arrow carousel__arrow--left-petit"
            onClick={prevSlide}
          >
            <img src={arrowLeftPetit} alt="Précédente" />
            {/* Flèche gauche : affiche l'image de la flèche */}
          </button>

          <button
            className="carousel__arrow carousel__arrow--right-petit"
            onClick={nextSlide}
          >
            <img src={arrowRightPetit} alt="Suivante" />
            {/* Flèche droite : affiche l'image de la flèche */}
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;
