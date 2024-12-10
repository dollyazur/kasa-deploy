import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";

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
