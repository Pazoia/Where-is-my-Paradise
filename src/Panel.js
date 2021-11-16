import React from "react";

import "./css/Panel.css";
import { positiveAffirmations } from "./data";

export const Panel = ({ selectedPanel, panelImage, handleClick, theme }) => {
  return (
    <div
      onClick={() => handleClick(panelImage)}
      className={`panel ${ selectedPanel ? (selectedPanel === panelImage ? "selected" : "hidden") : "" }`}
      style={{
      backgroundImage: `url(${panelImage})`,
      }}
    >
      <h1 className={selectedPanel ? "positive-affirmation" : "theme"}>{!selectedPanel ? theme : positiveAffirmations.life}</h1>
    </div>
  );
};