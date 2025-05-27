import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const { classname, label } = config;

  return (
    <button className={classname} onClick={selectNextBackground}>
      {label}
    </button>
  );
};

export default ColourSelector;
