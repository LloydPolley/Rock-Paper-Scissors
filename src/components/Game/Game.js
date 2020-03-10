import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./game.scss";

import SelectOption from "../SelectOption/SelectOption";
import Result from "../Result/Result";
import ComputerPlayer from "../../ComputerPlayer/ComputerPlayer";

import Rules from '../Rules/Rules';

const Game = props => {
  const [selectedBool, setSelectedBool] = useState(null);
  const [playerOption, setPlayerOption] = useState(0);
  const [npcOption, setNpcOption] = useState(0);
  const [won, setWon] = useState(null);
  const [score, setScore] = useState(0);

  const [rulesOpen, setRulesOpen] = useState(false);

  //NPC class
  const npc = new ComputerPlayer();
  const winner = (playerOption, npcOption) => {
    console.log(playerOption, npcOption);
    setPlayerOption(playerOption);
    setNpcOption(npcOption);
    if(playerOption === npcOption){
      setSelectedBool(true);
    }
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
    setSelectedBool(null);
    setWon(null);
  }

  const toggleRules = () => {
    setRulesOpen(rulesOpen ? false : true);
    console.log(rulesOpen ? false : true);
  }
  

  return (
    <div className="GameContainer">
      <Header score={score} />
      {selectedBool === null ? (
        <SelectOption
          run={inp => {
            winner(inp, npc.selectOption());
          }}
        />
      ) : (
        <Result playerOption={playerOption} npcOption={npcOption} playerWin={won} restartGame={restartGame}/>
      )}
      {rulesOpen ? (
        <Rules toggleRules={toggleRules}/>
      ):(
        <div></div>
      )}

      <div className="cta--white" onClick={toggleRules}>RULES</div>
    </div>
  );
};

export default Game;
