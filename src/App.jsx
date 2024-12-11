//import { createBrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";

//const router = createBrowserRouter([ //dans le tableau, on va préciser les différentes routes
//{ //définir les différentes routes
//path: '/'//défini par propriété path qui va dénir le chemin, ex page d'accueil
//element: <div>Page d'accueil</div> //element à rendre lorsque cette page est chargé, il suffit de mettre du jsx
//}

//])

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header"></header>
      <Banner />
      <banner className="App-banner"></banner>
    </div>
  );
}

export default App;
