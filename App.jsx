import { useState } from "react"
import Confetti from "react-confetti"
import Die from "./components/Die"

export default function App() {
  function generateDieValue() {
    // return Math.floor(Math.random() * 6) + 1;
    return Math.ceil(Math.random() * 6);
  }

  const [diceArray, setDiceArray] = useState(generateAllNewDice());

  const gameWon = diceArray.every(die => die.isHeld) && diceArray.every(die => die.value === diceArray[0].value)

  function generateAllNewDice() {
    let diceArray = []
    for (let i = 0; i < 10; i++) {
      diceArray[i] = {
        id: i+1,
        value: generateDieValue(),
        isHeld: false
      };
    }
    return diceArray;
  }

  function rollAllDice() {
    setDiceArray(prev => 
      prev.map(item => 
        item.isHeld ? item : { ...item, value: generateDieValue()}
      )
    )
  }

    function holdDice(id) {
        setDiceArray(prev => 
            prev.map(item => 
              item.id === id ? { ...item, isHeld: !item.isHeld} : item    
        )
      )
    }

  const diceComponents = diceArray.map(die => (
    <Die
      value={die.value} 
      isHeld={die.isHeld} 
      key={die.id} 
      id={die.id}
      handler={holdDice}
    />))
  return (
    <main>
      {gameWon && <Confetti/> }
      <h1 id="title">Tenzies</h1>
      <p id="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
      <div id="dice-container">
        {diceComponents}
      </div>
      <button id="roll-dice" onClick={rollAllDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
  );
}
