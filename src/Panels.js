import { useState } from "react";
import React from "react";

import "./css/Panels.css";
import { Panel } from "./Panel";
import { themeNames, panelImage } from "./data";

export const Panels = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);
  
  const handleClick = (panelImage) => {
    if (!selectedPanel) {
      setSelectedPanel(panelImage);
    } else {
      setSelectedPanel(null);
    }
  };

  return (
    <div className={`wrapper ${selectedPanel ? "title-hidden" : ""}`}>
      <h1 className="title">Where is your Paradise?</h1>
      <div className="panels">
        <Panel selectedPanel={selectedPanel} handleClick={handleClick} panelImage={panelImage.beach} theme={themeNames.beach} />
        <Panel selectedPanel={selectedPanel} handleClick={handleClick} panelImage={panelImage.mountain} theme={themeNames.mountain} />
        <Panel selectedPanel={selectedPanel} handleClick={handleClick} panelImage={panelImage.city} theme={themeNames.city} />
      </div>
    </div>
  );
};
