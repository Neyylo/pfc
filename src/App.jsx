import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const choices = ['paper','rock','cisor'];

  const game = () => {
    const [playerchoice, setplayerchoice] = useState(null);
    const [computerchoice, setcomputerchoicechoice] = useState(null);
    const [result, setresultchoice] = useState(null);
  };

  const resetgame = () => {
    setplayerchoice(null);
    setcomputerchoicechoice(null);
    setresultchoice(null);
  };

  const getRandomChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return 'Égalité !';
    if ((player === 'pierre' && computer === 'ciseaux') ||
        (player === 'feuille' && computer === 'pierre') ||
        (player === 'ciseaux' && computer === 'feuille')) {
      return 'Gagné !';
    } else {
      return 'Perdu !';
    }
  };
  


  return(
    <>

      <div>
        <h1>Rock Paper Cisor</h1>
      </div>
      <div>
        <button onClick={}></button>
      </div>

    </>
  )
}

export default App
