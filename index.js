import React, { useState } from 'react';

function DailyFoodConsumption() {
  const [morningConsumpt, setMorningConsumpt] = useState(0);
  const [lunchConsumpt, setLunchConsumpt] = useState(0);
  const [dinnerConsumpt, setDinnerConsumpt] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleMorning = () => {
    if (morningConsumpt <= 100) {
      setErrorMessage('I\'m still hungry, I need more food in my breakfast.');
    } else {
      setErrorMessage('');
    }
  };

  const handleLunch = () => {
    if (lunchConsumpt < 50) {
      setErrorMessage('I\'m still hungry, I need food in my lunch.');
    } else {
      setErrorMessage('');
    }
  };

  const handleDinner = () => {
    if (dinnerConsumpt < 20) {
      setErrorMessage('I\'m still hungry, I need food in my dinner.');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div id='container'>
    <div>
      <h2>Daily Food Consumption</h2>
      <div>
        <label>Morning Consumption:</label>
        <input
          type="number"
          value={morningConsumpt}
          onChange={(e) => setMorningConsumpt(parseInt(e.target.value))}
        />
        <button onClick={handleMorning}>Submit</button>
      </div>
      <div>
        <label>Lunch Consumption:</label>
        <input
          type="number"
          value={lunchConsumpt}
          onChange={(e) => setLunchConsumpt(parseInt(e.target.value))}
        />
        <button onClick={handleLunch}>Submit</button>
      </div>
      <div>
        <label>Dinner Consumption:</label>
        <input
          type="number"
          value={dinnerConsumpt}
          onChange={(e) => setDinnerConsumpt(parseInt(e.target.value))}
        />
        <button onClick={handleDinner}>Submit</button>
      </div>
      {errorMessage && <p style={{ color: 'red'}}>{errorMessage}</p>} 
      </div>
      <style jsx>{`
        #container{
          margin-top: 150pt;
          text-align: center;
        }
        div{
          margin-left: auto;
          margin-right: auto;
          width: fit-content;
        }
        p{
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default DailyFoodConsumption;
