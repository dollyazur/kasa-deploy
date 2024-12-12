import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home.jsx";
import APropos from "./pages/APropos.jsx";
import FicheLogement from "./pages/FicheLogement.jsx";
import Erreur from "./pages/Erreur.jsx";

const router = createBrowserRouter([
  //dans le tableau, on va préciser les différentes routes
  {
    //définir les différentes routes
    path: "/Home", //défini par propriété path qui va dénir le chemin, ex page d'accueil
    element: <Home />, //element à rendre lorsque cette page est chargé, il suffit de mettre du jsx
  },

  {
    path: "/FicheLogement",
    element: <FicheLogement />,
  },

  {
    path: "/APropos",
    element: <APropos />,
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
