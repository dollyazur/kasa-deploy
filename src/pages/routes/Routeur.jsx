import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../Home.jsx";
import Propos from "../Propos.jsx";
import FicheLogement from "../FicheLogement.jsx";
import Erreur from "../Erreur.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/housing/:id",
      element: <FicheLogement />,
    },
    {
      path: "/propos",
      element: <Propos />,
    },
    {
      path: "*",
      element: <Erreur />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
