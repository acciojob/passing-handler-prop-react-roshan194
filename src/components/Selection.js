import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({ background: '', key: '' });

  const updateSelectionStyle = (newStyle) => {
    setStyle(newStyle);
  };

  return (
    <div
      className="fix-box"
      style={{ background: style.background }}
      onClick={() => applyColor(updateSelectionStyle)}
      data-testid={style.key || ''} // Use the key for data-testid, default to empty string if not set
    >
      Selection
    </div>
  );
};

export default Selection;