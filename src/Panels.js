import { useState } from "react";
import "./Panels.css";

export const Panels = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);
  
  const handleClick = (panelColor) => {
    if (!selectedPanel) {
      setSelectedPanel(panelColor);
    } else {
      setSelectedPanel(null);
    }
  };

  if (!selectedPanel) {
    return (
      <div className="panels">
        <Panel handleClick={handleClick} panelColor="https://source.unsplash.com/gYl-UtwNg_I/3000x1500" />
        <Panel handleClick={handleClick} panelColor="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=3000&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d" />
        <Panel handleClick={handleClick} panelColor="https://source.unsplash.com/rFKUFzjPYiQ/3000x1500" />
      </div>
    );
  }

  return (
    <div className="panels">
      <Panel handleClick={handleClick} panelColor={selectedPanel} />
    </div>
  );
};

const Panel = ({ panelColor, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(panelColor)}
      className="panel"
      style={{
        backgroundImage: `url(${panelColor})`,
      }}
    />
  );
};
