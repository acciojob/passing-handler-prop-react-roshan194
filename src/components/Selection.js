import React from "react";

const getColorTestId = (color) => {
  if (color === "rgb(34, 193, 195)") return "blue";
  if (color === "rgb(221, 112, 18)") return "orange";
  if (color === "rgb(44, 209, 88)") return "green";
  return "";
};

const Selection = ({ bgColor }) => {
  return (
    <div
      className="fix-box"
      style={{ backgroundColor: bgColor }}
      data-testid={getColorTestId(bgColor)}
    >
      Selection
    </div>
  );
};

export default Selection;
