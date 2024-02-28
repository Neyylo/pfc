import { useState } from 'react'
import './App.css'

function App() {
  const choices = ['paper','rock','cisor'];
  const [playerchoice, setplayerchoice] = useState(null);
  const [computerchoice, setcomputerchoice] = useState(null);
  const [result, setresultchoice] = useState(null);


  const resetgame = () => {
    setplayerchoice(null);
    setcomputerchoice(null);
    setresultchoice(null);
  };

  const getRandomChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return 'Égalité !';
    if ((player === 'rock' && computer === 'cisor') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'cisor' && computer === 'paper')) {
      return 'Gagné !';
    } else {
      return 'Perdu !';
    }
  };
  
  const play = (choice) => {
    const computerchoice = getRandomChoice();
    const result = determineWinner(choice, computerchoice);
    setcomputerchoice(computerchoice);
    setplayerchoice(choice);
    setresultchoice(result);
  }


  return (
    <>

      <div className='Game'>
          <h1>Rock Paper Cisor</h1>
        <div className='choice'>
          {choices.map(choice => (
            <button key={choice} onClick={() => play(choice)} disabled={!!result}> 
              {choice}
            </button>
          ))}
        </div>
        {playerchoice && computerchoice && (
          <div className='results'>
            <p>Vous avez prit {playerchoice}</p>
            <p>L'ordinateur a choisit {computerchoice}</p>
            <p>Résultat : {result}</p>
            <button onClick={resetgame}>Rejouer</button>
          </div>
        )}
      </div>

    </>
  );
};

export default App
