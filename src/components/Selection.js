import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [bgColor, setBgColor] = useState("");

  const handleClick = () => {
    applyColor(setBgColor); // applyColor will pass the selected color to setBgColor
  };

  return (
    <div
      className="fix-box"
      onClick={handleClick}
      style={{ background: bgColor }}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
