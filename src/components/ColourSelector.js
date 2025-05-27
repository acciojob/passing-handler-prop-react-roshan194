import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname, label } = config;

  return (
    <button
      className={classname} // ✅ classname from config
      onClick={() => selectNextBackground(background)} // ✅ send only the color string
    >
      {label} {/* ✅ show the label */}
    </button>
  );
};

export default ColourSelector;
