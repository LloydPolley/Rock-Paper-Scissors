import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = props => {
  const [playerWins, setPlayerWins] = useState(0);
  const [opponentWins, setOpponentWins] = useState(0);
  const [draws, setDraws] = useState(0);

  return (
    <div className="header">
      <div className="header__title">
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </div>
      <div className="header__score">
        <p>SCORE</p>
        <h2>{props.score}</h2>
      </div>
      {/* <p>Player {props.playerWins}</p>
      <p>Draws {props.draws}</p>
      <p>NPC {props.opponentWins}</p> */}
    </div>
  );
};

export default Header;
