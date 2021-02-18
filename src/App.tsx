import React, { useState } from 'react';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setText(value);
  };

  const textLength = text.length;
  const textArray = text.split('');
  const handleClick = (oldArray: string[], index: number) => {
    const newArray = [...oldArray];
    newArray.splice(index, 1);
    setText(newArray.join(''));
  };

  return (
    <div className="App">
      <input
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={handleChange}
      />
      <p>{textLength}</p>
      <ValidationComponent textLength={textLength} />
      {textArray.map((char, index) => {
        return (
          <CharComponent
            key={index}
            letter={char}
            click={() => handleClick(textArray, index)}
          />
        );
      })}
    </div>
  );
}

export default App;
