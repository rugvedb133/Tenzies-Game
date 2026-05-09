import { useState } from "react"
import Die from "./components/Die"

/**
 * Challenge:
 *
 * Write a function (generateAllNewDice) that returns an array
 * of 10 random numbers between 1-6 inclusive.
 *
 * Log the array of numbers to the console for now
 */

export default function App() {
  function generateDieValue() {
    return Math.floor(Math.random() * 6) + 1;
  }

  const [diceArray, setDiceArray] = useState(generateAllNewDice());

  function generateAllNewDice() {
    let diceArray = []
    for (let i = 0; i < 10; i++) {
      diceArray[i] = generateDieValue();
    }
    return diceArray;
  }

  function rollAllDice() {
    setDiceArray(generateAllNewDice())
  }

  const diceComponents = diceArray.map(die => <Die value={die} />)
  return (
    <main>
      <div id="dice-container">
        {diceComponents}
      </div>
      <button id="roll-dice" onClick={rollAllDice}>Roll</button>
    </main>
  );
}
