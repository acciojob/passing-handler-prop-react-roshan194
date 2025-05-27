import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [bgColor, setBgColor] = useState("");
  const [testId, setTestId] = useState("");

  const updateSelectionStyle = (config) => {
    setBgColor(config.background);
    setTestId(config.key);
  };

  return (
    <div
      className="fix-box"
      onClick={() => applyColor(updateSelectionStyle)}
      style={{ backgroundColor: bgColor }}
      data-testid={testId}
    >
      Selection
    </div>
  );
};

export default Selection;
