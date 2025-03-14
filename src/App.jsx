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

    const diceComponents = dice.map(die => <Die isHeld={die.isHeld} key={die.id} value={die.value}/>)

    return (
        <main>
            <div className="dice-container">
                {diceComponents}
            </div>
            <button className="roll-dice"
                    onClick={() => setDice(generateDice)}
            >Roll
            </button>
        </main>
    )
}