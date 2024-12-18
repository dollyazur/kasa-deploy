import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Home.jsx";
import Propos from "../Propos.jsx";
import FicheLogement from "../FicheLogement.jsx";
import Erreur from "../Erreur.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/housing/:id",
    element: <FicheLogement />,
  },
  {
    path: "/Propos",
    element: <Propos />,
  },
  {
    path: "*",
    element: <Erreur />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
