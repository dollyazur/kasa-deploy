import image from "./images/Header/Desktop/Screen=Desktop, Active=Accueil.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={image}
          className="header-image"
          alt="représentation du header"
        />
        <p>da web inside</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
