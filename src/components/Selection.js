import React, { useState } from "react";

// ✅ Define the helper function at the top or before the component
const getColorTestId = (color) => {
  if (color === "rgb(34, 193, 195)") return "blue";
  if (color === "rgb(221, 112, 18)") return "orange";
  if (color === "rgb(44, 209, 88)") return "green";
  return "";
};

const Selection = ({ applyColor }) => {
  const [bgColor, setBgColor] = useState("");

  const updateSelectionStyle = (color) => {
    setBgColor(color);
  };

  return (
    <div
      className="fix-box"
      onClick={() => applyColor(updateSelectionStyle)}
      style={{ backgroundColor: bgColor }}
      data-testid={getColorTestId(bgColor)} // ✅ Will now be recognized
    >
      Selection
    </div>
  );
};

export default Selection;
