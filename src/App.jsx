import Die from "./components/Die.jsx"
import {useState} from "react";
import {nanoid} from "nanoid";

export default function App() {

    const [dice, setDice] = useState(generateDice)

    function generateDice() {
        return new Array(10)
            .fill({})
            .map(() => ({
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: nanoid()
                })
            )
    }

    function rollDice() {
        setDice(oldDice => oldDice.map(die => die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}))
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
    }

    const diceComponents = dice.map(die => <Die isHeld={die.isHeld} id={die.id} key={die.id} value={die.value}
                                                hold={hold}/>)

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceComponents}
            </div>
            <button className="roll-dice"
                    onClick={rollDice}
            >Roll
            </button>
        </main>
    )
}