import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: '' });

  const updateSelectionStyle = (newStyle) => {
    setStyle(newStyle);
  };

  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      Selection
    </div>
  );
};

export default Selection;