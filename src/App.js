import "./App.css";
import logo from "./dictionary-image.png";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
      </div>
      <p>
        coded by <a href="https://github.com/mia-chou">Fang-Yi Chou</a> and
        open-source on{" "}
        <a href="https://github.com/mia-chou/react-dictionary-app">Github</a>
      </p>
    </div>
  );
}

export default App;
