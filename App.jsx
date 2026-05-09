import { useState } from "react"
import Die from "./components/Die"

export default function App() {
  function generateDieValue() {
    // return Math.floor(Math.random() * 6) + 1;
    return Math.ceil(Math.random() * 6);
  }

  const [diceArray, setDiceArray] = useState(generateAllNewDice());

  function generateAllNewDice() {
    let diceArray = []
    for (let i = 0; i < 10; i++) {
      diceArray[i] = {
        id: i+1,
        value: generateDieValue(),
        isHeld: true
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
      <div id="dice-container">
        {diceComponents}
      </div>
      <button id="roll-dice" onClick={rollAllDice}>Roll</button>
    </main>
  );
}
