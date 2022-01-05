import { useState, useEffect, useRef } from "react";
import React from "react";

import "./css/Panels.css";
import { Panel } from "./Panel";
import { themeNames, panelImage, affirmationsList } from "./data";
import { randomAffirmationGenerator } from "./randomAffirmationGenerator";


export const Panels = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [selectedAffirmation, setSelectedAffirmation] = useState(null);

  const handleClick = (panelImage) => {
    if (!selectedPanel) {
      setSelectedPanel(panelImage);
      setSelectedAffirmation(randomAffirmationGenerator(affirmationsList, selectedAffirmation));
    } else {
      setSelectedPanel(null);
      setSelectedAffirmation(null);
    }
  };

  let myTimeout = useRef();
  
  useEffect(() => {
    if (selectedPanel) {
      myTimeout.current = setTimeout(() => {
        setSelectedAffirmation(randomAffirmationGenerator(affirmationsList, selectedAffirmation));
      }, 30000);
    }

    return () => { 
      if (!selectedPanel) {
        clearTimeout(myTimeout.current);
      } 
    };

  }, [selectedPanel, selectedAffirmation]);

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
