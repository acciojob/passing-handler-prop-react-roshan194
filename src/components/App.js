import React, { useState } from 'react';
import ColourSelector from './ColourSelector';
import Selection from './Selection';

const colorConfig = [
  { id: 'red', label: 'Red' },
  { id: 'blue', label: 'Blue' },
  { id: 'green', label: 'Green' },
];

function App() {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div>
      <h1>Handler Prop Demo</h1>
      <ColourSelector config={colorConfig} selectColor={setSelectedColor} />
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
      </div>
    </div>
  );
}

export default App;
