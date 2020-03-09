import React, { useEffect, useState } from "react";
import "./SelectOption.scss";
import Rock from "../options/Rock";
import Paper from "../options/Paper";
import Scissors from "../options/Scissors";
import originalOptions from '../../data/options';

import Options from '../options/Options';



const SelectOption = props => {
  return (
    <div className="ButtonsContainer">
      {originalOptions.map((option)=>{
        return <Options key={option.option} optionValue={option.option} svg={option.svg} run={props.run}/>
      })}
    </div>
  );
};

export default SelectOption;
