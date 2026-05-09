import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import Die from "./components/Die";

export default function App() {
    function generateDieValue() {
        // return Math.floor(Math.random() * 6) + 1;
        return Math.ceil(Math.random() * 6);
    }

    const [diceArray, setDiceArray] = useState(() => generateAllNewDice());
    const newGameButton = useRef(null)

    const gameWon =
        diceArray.every((die) => die.isHeld) &&
        diceArray.every((die) => die.value === diceArray[0].value);

    useEffect(() => {
        if (gameWon) {
            newGameButton.current.focus()
        }
    }, [gameWon])

    function generateAllNewDice() {
        let diceArray = [];
        for (let i = 0; i < 10; i++) {
            diceArray[i] = {
                id: i + 1,
                value: generateDieValue(),
                isHeld: false,
            };
        }
        return diceArray;
    }

    function rollAllDice() {
        if (gameWon) {
            setDiceArray(generateAllNewDice());
        } else {
            setDiceArray((prev) =>
                prev.map((item) =>
                    item.isHeld ? item : { ...item, value: generateDieValue() },
                ),
            );
        }
    }

    function holdDice(id) {
        setDiceArray((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, isHeld: !item.isHeld } : item,
            ),
        );
    }

    const diceComponents = diceArray.map((die) => (
        <Die
            value={die.value}
            isHeld={die.isHeld}
            key={die.id}
            id={die.id}
            handler={holdDice}
        />
    ));
    return (
        <main>
            <div aria-live="polite">
                {gameWon && <Confetti />}
                {gameWon && (
                    <p className="sr-only">
                        Congratulations! You won! Press "New Game" to start again.
                    </p>
                )}
            </div>
            <h1 id="title">Tenzies</h1>
            <p id="instructions">
                Roll until all dice are the same.
                Click each die to freeze it at its current value between rolls.
            </p>
            <div id="dice-container">{diceComponents}</div>
            <button
                id="roll-dice"
                onClick={rollAllDice}
                ref={newGameButton}
            >
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    );
}
