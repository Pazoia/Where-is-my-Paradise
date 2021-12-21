import { useState, useEffect } from "react";
import React from "react";

import "./css/Panels.css";
import { Panel } from "./Panel";
import { themeNames, panelImage, affirmationsList } from "./data";
import { randomAffirmationGenerator } from "./randomAffirmationGenerator";


export const Panels = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [selectedAffirmation, setSelectedAffirmation] = useState(null);

  const affirmation = randomAffirmationGenerator(affirmationsList, selectedAffirmation);

  const handleClick = (panelImage) => {
    if (!selectedPanel) {
      setSelectedPanel(panelImage);
      setSelectedAffirmation(affirmation);
    } else {
      setSelectedPanel(null);
      setSelectedAffirmation(null);
    }
  };

  useEffect(() => {
    if (selectedAffirmation) {
      let nextAffirmation = affirmation;
      
      setTimeout(() => {
        setSelectedAffirmation(nextAffirmation);
      }, 10000);
    }
  });

  return (
    <div className={`wrapper ${selectedPanel ? "title-hidden" : ""}`}>
      <h1 className="title">Where is your Paradise?</h1>
      <div className="panels">
        <Panel
          selectedAffirmation={selectedAffirmation}
          selectedPanel={selectedPanel}
          handleClick={handleClick}
          panelImage={panelImage.beach}
          theme={themeNames.beach}
        />
        <Panel
          selectedAffirmation={selectedAffirmation}
          selectedPanel={selectedPanel}
          handleClick={handleClick}
          panelImage={panelImage.mountain}
          theme={themeNames.mountain}
        />
        <Panel
          selectedAffirmation={selectedAffirmation}
          selectedPanel={selectedPanel}
          handleClick={handleClick}
          panelImage={panelImage.city}
          theme={themeNames.city}
        />
      </div>
    </div>
  );
};
