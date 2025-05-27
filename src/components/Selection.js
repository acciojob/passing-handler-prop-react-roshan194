import React, { useState } from "react";

const Selection = ({ applyColor, "data-testid": dataTestId }) => {
  const [bgColor, setBgColor] = useState("");
  const [testId, setTestId] = useState("unselected");

  const updateSelectionStyle = (config) => {
    if (config && config.background && config.key) {
      setBgColor(config.background);
      setTestId(config.key);
    }
  };

  return (
    <div
      className="fix-box"
      onClick={() => applyColor(updateSelectionStyle)}
      style={{ backgroundColor: bgColor }}
      data-testid={testId || dataTestId || "selection-box"} // Fallback to prop or default
    >
      Selection
    </div>
  );
};

export default Selection;