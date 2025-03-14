import Die from "./components/Die.jsx"
import { useState } from "react";

export default function App() {

    const [diceNumbers, setDiceNumbers] = useState(generateDiceNumbers)

    function generateDiceNumbers() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

    const diceComponents = diceNumbers.map(number => <Die value={number} />)

    return (
        <main>
            <div className="dice-container">
                {diceComponents}
            </div>
            <button className="roll-dice"
                onClick={() => setDiceNumbers(generateDiceNumbers)}
            >Roll</button>
        </main>
    )
}