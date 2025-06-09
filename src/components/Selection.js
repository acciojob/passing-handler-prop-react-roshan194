import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [bgStyle, setBgStyle] = useState({ backgroundColor: "rgb(239, 239, 239)" });

  return (
    <div
      className="fix-box"
      onClick={() => applyColor(setBgStyle)}
      style={bgStyle}
    ></div>
  );
};

export default Selection;
