import React, { useState } from 'react';

// Define the mapping of background colors to keys (same as in App.js)
const backgroundToKey = {
  'rgb(34, 193, 195)': 'blue',
  'rgb(221, 112, 18)': 'orange',
  'rgb(44, 209, 88)': 'green',
};

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: '' });

  const updateSelectionStyle = (newStyle) => {
    setStyle(newStyle);
  };

  // Determine the data-testid based on the background color
  const testId = style.background ? backgroundToKey[style.background] || '' : '';

  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => applyColor(updateSelectionStyle)}
      data-testid={testId}
    >
      Selection
    </div>
  );
};

export default Selection;