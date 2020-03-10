import React, { useEffect, useState } from "react";
// import "./SelectOption.scss";
import Rock from "../options/Rock";

const Paper = props => {
  return (
    <div className="Button-wrapper">
      <div className="game-border" data-option={props.optionValue}>
        <div
          className="game-icons"
          data-option={props.optionValue}
          onClick={e => {
            props.run(e.target.dataset.option);
          }}
          dangerouslySetInnerHTML={{__html: props.svg}}
        >
        </div>
      </div>
    </div>
  );
};

export default Paper;
