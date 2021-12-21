import React from "react";

import "./css/Panel.css";

export const Panel = ({
    selectedAffirmation,
    selectedPanel,
    panelImage,
    handleClick,
    theme,
  }) => {
  return (
    <div
      onClick={() => handleClick(panelImage)}
      className={`panel ${ selectedPanel ? (selectedPanel === panelImage ? "selected" : "hidden") : "" }`}
      style={{
      backgroundImage: `url(${panelImage})`,
      }}
    >
      <h1 className={selectedPanel ? "positive-affirmation fade-in" : "theme"}>
        {!selectedPanel ? theme : selectedAffirmation}
      </h1>
    </div>
  );
};