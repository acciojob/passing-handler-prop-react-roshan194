import React, { useState } from "react";
import '../styles/App.css';
import Selection from './Selection';
import ColourSelector from './ColourSelector';

const colourConfig = [
  {
    key: 'blue',
    label: 'Blue',
    classname: 'btn-blue',
    background: 'rgb(34, 193, 195)',
  },
  {
    key: 'orange',
    label: 'Orange',
    classname: 'btn-orange',
    background: 'rgb(221, 112, 18)',
  },
  {
    key: 'green',
    label: 'Green',
    classname: 'btn-green',
    background: 'rgb(44, 209, 88)',
  },
];

const title = 'Select the gradient and then the Box to change the color';

const App = () => {
  const [boxColors, setBoxColors] = useState(["", "", ""]);

  const handleColorSelect = (color) => {
    setBoxColors([color, color, color]); // Set all three boxes
  };

  return (
    <div id="master">
      <h5 className="heading">{title}</h5>

      <div className="row">
        {colourConfig.map((config) => (
          <ColourSelector
            key={config.key}
            config={config}
            selectNextBackground={handleColorSelect}
          />
        ))}
      </div>

      <div className="row" id="children-wrapper">
        {boxColors.map((color, index) => (
          <Selection key={index} bgColor={color} />
        ))}
      </div>
    </div>
  );
};

export default App;
