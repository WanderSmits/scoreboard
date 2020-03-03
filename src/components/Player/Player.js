import React from "react";
import "./Player.scss";
export default function Player(props) {
  const { id, name, score, incrementScore, decrementScore } = props;

  // the event listener callback
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    console.log(id);
    incrementScore(id);
  };

  const onClickDecrement = () => {
    // call the callback prop passed down from the scoreboard
    console.log(id);
    decrementScore(id);
  };

  return (
    <li className="Player">
      <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
      <p>
        {name} (score: {score})<button onClick={onClickIncrement}>+</button>
      </p>
    </li>
  );
}
