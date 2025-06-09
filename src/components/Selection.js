import React, { useState } from 'react';

function Selection({ selectedColor }) {
  const [bgColor, setBgColor] = useState('');

  const handleClick = () => {
    setBgColor(selectedColor);
  };

  return (
    <div
      className="fix-box"
      onClick={handleClick}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: bgColor,
        border: '1px solid black',
        cursor: 'pointer',
      }}
    />
  );
}

export default Selection;
