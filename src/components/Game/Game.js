import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./game.scss";

import SelectOption from "../SelectOption/SelectOption";
import Result from "../Result/Result";
import ComputerPlayer from "../../ComputerPlayer/ComputerPlayer";

const Game = props => {
  const [selectedBool, setSelectedBool] = useState(false);
  const [playerOption, setPlayerOption] = useState(0);
  const [npcOption, setNpcOption] = useState(0);
  const [won, setWon] = useState(false);
  const [score, setScore] = useState(0);

  //NPC class
  const npc = new ComputerPlayer();
  const winner = (playerOption, npcOption) => {
    console.log(playerOption);
    setPlayerOption(playerOption);
    setNpcOption(npcOption);
    if (
      (playerOption === "Rock" && npcOption === "Paper") ||
      (playerOption === "Scissors" && npcOption === "Rock") ||
      (playerOption === "Paper" && npcOption === "Scissors")
    ) {
      setScore(score - 1);
      setSelectedBool(true);
      setWon(false)
    }
    if (
      (playerOption === "Scissors" && npcOption === "Paper") ||
      (playerOption === "Paper" && npcOption === "Rock") ||
      (playerOption === "Rock" && npcOption === "Scissors")
    ) {
      setScore(score + 1);
      setSelectedBool(true);
      setWon(true);
    }
  };


  const restartGame = () => {
    setSelectedBool(false);
  }

  return (
    <div className="GameContainer">
      <Header score={score} />
      {selectedBool === false ? (
        <SelectOption
          run={inp => {
            winner(inp, npc.selectOption());
          }}
        />
      ) : (
        <Result playerOption={playerOption} npcOption={npcOption} playerWin={won} restartGame={restartGame}/>
      )}

      <div className="cta--white">RULES</div>
    </div>
  );
};

export default Game;
