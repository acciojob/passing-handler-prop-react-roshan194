import React, { useState, useEffect } from 'react';

const Selection = ({ applyColor, refFn }) => {
  const [style, setStyle] = useState({ background: '', key: '' });

  useEffect(() => {
    if (refFn) {
      refFn(setStyle);
    }
  }, []);

  return (
    <div
      className="fix-box"
      style={{ background: style.background }}
      onClick={() => applyColor(setStyle)}
      data-testid={style.key || ''}
    >
      Selection
    </div>
  );
};

export default Selection;
