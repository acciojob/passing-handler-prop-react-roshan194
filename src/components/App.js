import React, { useState, useRef } from "react";
import '../styles/App.css';
import Selection from './Selection';
import ColourSelector from './ColourSelector';

const colourConfig = [{
    key: 'blue',
    label: 'Blue',
    classname: 'btn-blue',
    background: 'rgb(34, 193, 195)'
  }, {
    key: 'orange',
    label: 'Orange',
    classname: 'btn-orange',
    background: 'rgb(221, 112, 18)'
  }, {
    key: 'green',
    label: 'Green',
    classname: 'btn-green',
    background: 'rgb(44, 209, 88)'
  }
];

const title = 'Select the gradient and then the Box to change the color';

const App = () => {
  const selectionRefs = useRef([]);

  const applyColor = (updateSelectionStyle) => {
    updateSelectionStyle(nextBackground);
  };

  const [nextBackground, setNextBackground] = useState({ background: "", key: "" });

  const handleColorSelect = (colorObj) => {
    setNextBackground(colorObj);

    // Update all selection boxes immediately
    selectionRefs.current.forEach(ref => {
      if (ref) {
        ref(colorObj);
      }
    });
  };

  return (
    <div id="master">
      <h5 className="heading">{title}</h5>

      <div className="row">
        {colourConfig.map((config) => (
          <ColourSelector
            key={config.key}
            config={config}
            selectNextBackground={() => handleColorSelect({ background: config.background, key: config.key })}
          />
        ))}
      </div>

      <div className='row' id="children-wrapper">
        {
          ["selection1", "selection2", "selection3"].map((key, idx) => (
            <Selection
              key={key}
              applyColor={applyColor}
              refFn={(fn) => (selectionRefs.current[idx] = fn)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default App;
