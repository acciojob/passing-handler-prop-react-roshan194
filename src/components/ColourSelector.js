import React from 'react';

function ColourSelector({ config, selectColor }) {
  return (
    <div>
      {config.map((color) => (
        <button
          key={color.id}
          onClick={() => selectColor(color.id)}
          style={{ marginRight: '10px', padding: '8px 16px' }}
        >
          {color.label}
        </button>
      ))}
    </div>
  );
}

export default ColourSelector;
