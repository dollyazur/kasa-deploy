import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home.jsx";
import FicheLogement from "./pages/FicheLogement.jsx";
import Propos from "./pages/Propos.jsx";

import Erreur from "./pages/Erreur.jsx";

const router = createBrowserRouter([
  //dans le tableau, on va préciser les différentes routes
  {
    //définir les différentes routes
    path: "/", //défini par propriété path qui va dénir le chemin, ex page d'accueil
    element: <Home />, //element à rendre lorsque cette page est chargé, il suffit de mettre du jsx
  },

  {
    path: "/fichelogement",
    element: <FicheLogement />,
  },

  {
    path: "/propos",
    element: <Propos />,
  },

  {
    path: "*", //route generique pour les erreurs
    element: <Erreur />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
