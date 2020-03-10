import React, { useEffect, useState } from "react";
import "./Rules.scss";
import RulesImage from '../../images/image-rules.svg';
import close from '../../images/icon-close.svg';

const Rules = props => {
  return (
    <div className="rulesContainer">
    
        <img className="closeRules" onClick={props.toggleRules} src={close}/>
        <h2>Rules</h2>
        <img className="rulesImage" src={RulesImage}/>
    </div>
  );
};

export default Rules;
