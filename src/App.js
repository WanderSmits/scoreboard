import React from "react";
import Title from "./components/Title";
import "./App.scss";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import AddPlayerForm from "./components/AddPlayerForm";

function App() {
  return (
    <div className="App">
      <main>
        <Title />
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
