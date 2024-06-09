import React, { useState } from 'react';

function DailyFoodConsumption() {
  const [walletAddress, setWalletAddress] = useState('');
  const [errorMessages, setErrorMessages] = useState('');
  const [morningConsumpt, setMorningConsumpt] = useState(0);
  const [lunchConsumpt, setLunchConsumpt] = useState(0);
  const [dinnerConsumpt, setDinnerConsumpt] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');


  const connectToMetaMask = async () => {
    if (window.ethereum) {
      try {
        
        await window.ethereum.request({ method: 'eth_requestAccounts' });

       
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        } else {
          setErrorMessages('No account found. Please make sure you have a wallet connected.');
        }
        
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      setErrorMessages('MetaMask is not installed. Please install MetaMask to use this feature.');
    }
  };


  const handleMorning = () => {
    if(walletAddress != ""){
      if (morningConsumpt < 100) {
        setErrorMessage('I\'m still hungry, I need more food in my breakfast.');
      } else {
        setErrorMessage('');
        setMessage('I\'m full, so yummy my tommy!');
      }
    }
    else{
      setErrorMessage('YOU MUST CONNECT METAMASK');
    }
  };

  const handleLunch = () => {
    if(walletAddress != ""){
      if (lunchConsumpt < 50) {
      setErrorMessage('I\'m still hungry, I need food in my lunch.');
    } else {
      setErrorMessage('');
      setMessage('I\'m full, so yummy my tommy!');
    }
    }
    else{
      setErrorMessage('');
      setErrorMessage('YOU MUST CONNECT METAMASK');
    }
    
  };

  const handleDinner = () => {
    if(walletAddress != ""){
      if (dinnerConsumpt < 20) {
      setErrorMessage('I\'m still hungry, I need food in my dinner.');
    } else {
      setErrorMessage('');
      setMessage('I\'m full, so yummy my tommy!');
    }
    }
    else{
      setErrorMessage('YOU MUST CONNECT METAMASK');
    }
    
  };

  return (
    <div id='container'>
    <div>
      <h2>Connect to MetaMask</h2>
      <button onClick={connectToMetaMask}>Connect</button>
      {walletAddress && (
        <div>
          <p>Connected Wallet Address:</p>
          <p>{walletAddress}</p>
        </div>
      )}
      {errorMessages && <p>{errorMessages}</p>}
      <br />

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
      {message && <p style={{ color: 'green'}}>{message}</p>} 
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
