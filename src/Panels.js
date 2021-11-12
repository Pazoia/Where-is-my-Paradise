import { useState } from "react";
import React from "react";
import "./Panels.css";

export const Panels = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);
  
  const handleClick = (panelImage) => {
    if (!selectedPanel) {
      setSelectedPanel(panelImage);
    } else {
      setSelectedPanel(null);
    }
  };

  if (!selectedPanel) {
    return (
      <div className="wrapper">
        <h1 className="title">Where is your Paradise?</h1>
        <div className="panels">
          <Panel handleClick={handleClick} panelImage="https://source.unsplash.com/eXHeq48Z-Q4/3000x1500" theme="By the Beach" />
          <Panel handleClick={handleClick} panelImage="https://source.unsplash.com/7bwQXzbF6KE/3000x1500" theme="Walking in the Mountains" />
          <Panel handleClick={handleClick} panelImage="https://source.unsplash.com/kheTI8pIywU/3000x1500" theme="A day in the City" />
        </div>
      </div>
    );
  }

  return (
    <div className="panels">
        <Panel handleClick={handleClick} panelImage={selectedPanel} />
    </div>
  );
};

const Panel = ({ panelImage, handleClick, theme }) => {
  return (
    <div
      onClick={() => handleClick(panelImage)}
      className="panel"
      style={{
      backgroundImage: `url(${panelImage})`,
      }}
    >
      <h1 className="theme">{theme}</h1>
    </div>
  );
};
