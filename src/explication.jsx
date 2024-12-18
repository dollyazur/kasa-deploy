1. Le useFetch personnalisé
C’est un petit outil magique qu’on crée pour aller chercher des données sur Internet (ou dans un fichier), comme si on lisait une histoire dans un livre.

javascript
Copier le code
import { useState, useEffect } from "react"; 
// On prend des outils de React : useState (pour se souvenir des choses) et useEffect (pour faire quelque chose après).

export const useFetch = (url) => { 
  // On fait une fonction qui s'appelle `useFetch`, et elle a besoin d'une adresse (là où se trouvent les infos).
  const [data, setData] = useState(null); 
  // On prépare une boîte vide pour ranger les infos qu’on va chercher.
  const [isLoading, setIsLoading] = useState(true); 
  // On prépare un état qui dit : "Je suis en train de chercher, attends un peu !"
  const [error, setError] = useState(null); 
  // Une autre boîte pour dire s’il y a un problème (par exemple, si on ne trouve pas le livre).

  useEffect(() => { 
    // On dit : "Hé, fais ça quand la page s’affiche".
    const fetchData = async () => { 
      // Une mission spéciale (async) pour aller chercher des infos.
      try { 
        // On essaye de lire les infos.
        const response = await fetch(url); 
        // On va chercher à l’adresse donnée.
        if (!response.ok) { 
          // Si le livre est cassé (mauvaise réponse)…
          throw new Error("Erreur lors de la récupération des données");
          // On lance une alerte (une erreur).
        }
        const result = await response.json(); 
        // Si tout va bien, on transforme le livre en infos compréhensibles (JSON).
        setData(result); 
        // Et on range les infos dans notre boîte.
      } catch (err) { 
        // Si on n’arrive pas à lire le livre…
        setError(err.message); 
        // On met le problème dans la boîte des erreurs.
      } finally { 
        // À la fin, qu’il y ait un problème ou pas...
        setIsLoading(false); 
        // On dit : "C’est bon, j’ai fini de chercher !"
      }
    };

    fetchData(); 
    // On commence la mission.
  }, [url]); 
  // On fait ça chaque fois que l’adresse change.

  return { data, isLoading, error }; 
  // On renvoie nos boîtes (les infos, si on cherche encore ou s’il y a un problème).
};
2. La page principale (Home)
C’est la maison où toutes les cartes s’affichent. D’abord 6, puis on peut en demander plus.

javascript
Copier le code
import React, { useState } from "react"; 
// On importe React et useState (pour se souvenir du nombre de cartes qu’on montre).
import { useFetch } from "../../utils/useFetch"; 
// On utilise notre outil magique pour chercher les infos.
import { Link } from "react-router-dom"; 
// Pour permettre de cliquer sur une carte et aller à une autre page.
import Loader from "../Loader/Loader"; 
// Un joli chargement pendant qu’on attend les infos.
import "./Home.scss"; 
// On rend la maison jolie grâce à des couleurs et styles.

const Home = () => { 
  // On fait une nouvelle maison (Home).
  const { data: cards, isLoading, error } = useFetch("/data.json"); 
  // On utilise notre outil pour lire les infos du fichier data.json.
  const [numCardsToShow, setNumCardsToShow] = useState(6); 
  // On commence par montrer seulement 6 cartes.

  const showMoreCards = () => { 
    // Une fonction pour montrer plus de cartes.
    setNumCardsToShow((prev) => prev + 6); 
    // On dit : "Ajoute 6 cartes de plus".
  };

  if (isLoading) return <Loader />; 
  // Si on est encore en train de chercher, on montre un joli message.
  if (error) return <div>Erreur : {error}</div>; 
  // S’il y a un problème, on le dit simplement.

  return (
    <section className="home"> 
      {/* C’est le grand cadre où on met tout. */}
      <h1>Liste des logements</h1> 
      {/* Un titre pour dire ce qu’on voit. */}
      <div className="home__grid"> 
        {/* Une grille pour ranger toutes les cartes. */}
        {cards.slice(0, numCardsToShow).map(({ id, title, cover }) => (
          // On prend les 6 premières cartes (ou plus si on a cliqué sur "Afficher plus").
          <Link to={`/housing/${id}`} key={id} className="card"> 
            {/* Chaque carte est un lien vers sa propre page. */}
            <img src={cover} alt={title} className="card__image" /> 
            {/* L’image de la carte. */}
            <h2 className="card__title">{title}</h2> 
            {/* Le titre de la carte. */}
          </Link>
        ))}
      </div>
      {numCardsToShow < cards.length && ( 
        // Si on n’a pas encore montré toutes les cartes...
        <button className="home__button" onClick={showMoreCards}> 
          {/* Un bouton pour demander à en voir plus. */}
          Afficher plus
        </button>
      )}
    </section>
  );
};

export default Home; 
// On finit la maison et on la montre au monde.
3. Les pages individuelles (HousingPage)
C’est comme si on ouvrait une carte pour voir tout ce qu’elle contient.

javascript
Copier le code
import React from "react"; 
// On utilise React pour faire cette page.
import { useParams, useNavigate } from "react-router-dom"; 
// On regarde quel numéro de carte (id) est dans l’adresse.
import { useFetch } from "../../utils/useFetch"; 
// On utilise encore notre outil pour chercher les infos.
import Loader from "../Loader/Loader"; 
// Encore un joli chargement.
import "./HousingPage.scss"; 
// On rend cette page jolie.

const HousingPage = () => { 
  const { id } = useParams(); 
  // On récupère l’id de la carte dans l’adresse (comme "housing/1").
  const { data: cards, isLoading, error } = useFetch("/data.json"); 
  // On récupère toutes les cartes.
  const navigate = useNavigate(); 
  // On prépare à rediriger si besoin.

  if (isLoading) return <Loader />; 
  // Si on cherche encore, on attend.
  if (error) return <div>Erreur : {error}</div>; 
  // Si on a un problème, on le dit.

  const housing = cards.find((card) => card.id === id); 
  // On cherche la carte qui a exactement le bon id.

  if (!housing) { 
    // Si on ne trouve pas cette carte...
    navigate("/404"); 
    // On envoie l’utilisateur sur une page 404 (erreur).
    return null; 
    // On arrête tout ici.
  }

  const { title, description, pictures, host, rating, location, equipments, tags } = housing; 
  // On prend toutes les infos de cette carte.

  return (
    <div className="housing"> 
      <h1>{title}</h1> 
      {/* On montre le titre. */}
      <p>{description}</p> 
      {/* Et la description. */}
      <p>Location : {location}</p> 
      {/* L’endroit. */}
      <p>Équipements : {equipments.join(", ")}</p> 
      {/* Ce qu’il y a dans la maison. */}
      <p>Tags : {tags.join(", ")}</p> 
      {/* Les petits mots-clés. */}
      <p>Note : {rating}/5</p> 
      {/* La note donnée par les gens. */}
    </div>
  );
};

export default HousingPage; 
// On finit cette page et on la montre.
4. La page d’erreur 404
C’est une page pour dire : "Oups, on ne trouve pas ce que tu cherches !"

javascript
Copier le code
import React from "react"; 
// On utilise React.
import { Link } from "react-router-dom"; 
// On ajoute un lien pour retourner à la maison.
import "./Error404.scss"; 
// On la rend jolie.

const Error404 = () => { 
  return (
    <div className="error404"> 
      <h1>404</h1> 
      {/* Un gros "404" pour dire qu’on ne trouve rien. */}
      <p>Oups, la page que vous recherchez n'existe pas.</p> 
      {/* Un petit message d’excuse. */}
      <Link to="/" className="error404__link"> 
        {/* Un bouton pour revenir à la maison. */}
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default Error404; 
// On finit cette page.
5. Les routes
C’est comme une carte qui dit où aller dans notre site.

javascript
Copier le code
import React from "react"; 
// On utilise React.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// On fait des routes pour notre site.
import Home from "./components/Home/Home"; 
// La maison principale.
import HousingPage from "./components/HousingPage/HousingPage"; 
// Les pages des cartes.
import Error404 from "./components/Error404/Error404"; 
// La page d’erreur.

const App = () => { 
  return (
    <Router> 
      {/* On met toutes les routes dans un "router". */}
      <Routes> 
        {/* On définit les chemins (routes). */}
        <Route path="/" element={<Home />} /> 
        {/* La route "/" va à la maison. */}
        <Route path="/housing/:id" element={<HousingPage />} /> 
        {/* La route "/housing/:id" va aux pages des cartes. */}
        <Route path="*" element={<Error404 />} /> 
        {/* Si rien ne marche, on va à la page 404. */}
      </Routes>
    </Router>
  );
};

export default App; 
// On finit notre plan de route.
🎉 Et voilà ! Tu as une maison avec des cartes, des pages individuelles pour chaque carte, et une jolie page d’erreur si quelque chose ne va pas !






