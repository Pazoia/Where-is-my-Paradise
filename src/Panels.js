import "./Panels.css";

export const Panels = () => {
  return (
    <div className="panels">
      <Panel panelColor="Orange" />
      <Panel panelColor="Green" />
      <Panel panelColor="Grey" />
    </div>
  );
};

const Panel = (props) => {
  return (
    <div className="panel" style={{
        backgroundColor: props.panelColor
    }}>
      {props.panelColor}
    </div>
  );
};
