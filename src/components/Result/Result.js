import React, { useEffect, useState } from "react";
import Options from "../options/Options";
import datas from "../../data/options";
import "./Result.scss";

const SelectOption = props => {
  return (
    <div className="resultsScreen">
      <div className="resultsIcons">
        <div className="resultsIcons__half">
          {datas.map(option => {
            if (option.option === props.playerOption) {
              return (
                <Options
                  key={option.option}
                  optionValue={option.option}
                  svg={option.svg}
                  run={props.restartGame}
                />
              );
            }
          })}
          <p>YOU PICKED</p>
        </div>
        <div className="resultsIcons__half">
          {datas.map(option => {
            if (option.option === props.npcOption) {
              return (
                <Options
                  key={option.option}
                  optionValue={option.option}
                  svg={option.svg}
                  run={props.restartGame}
                />
              );
            }
          })}
          <p>THE HOUSE PICKED</p>
        </div>
      </div>
      {props.playerWin === null ? (
        <h2>Draw</h2>
      ) : props.playerWin ? (
        <h2>You win</h2>
      ) : (
        <h2>You lose</h2>
      )}

      <div className="restartGame" onClick={props.restartGame}>
        PLAY AGAIN
      </div>
    </div>
  );
};

export default SelectOption;
