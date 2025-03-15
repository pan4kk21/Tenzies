import Die from "./components/Die.jsx"
import {useEffect, useRef, useState} from "react";
import {nanoid} from "nanoid";
import Confetti from 'react-confetti'


export default function App() {

    const [dice, setDice] = useState(() => generateDice())
    const buttonRef = useRef(null)

    const gameWon = dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)

    useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus()
        }
    }, [gameWon])

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
        gameWon ? setDice(generateDice) : setDice(oldDice => oldDice.map(die => die.isHeld ? die : {
            ...die,
            value: Math.ceil(Math.random() * 6)
        }))
    }

    function hold(id) {
        setDice(oldDice => oldDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
    }

    const diceComponents = dice.map(die => <Die isHeld={die.isHeld} id={die.id} key={die.id} value={die.value}
                                                hold={hold}/>)

    return (
        <>
            {gameWon && <Confetti/>}
            <main>
                <div aria-live="polite" className="sr-only">
                    {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
                </div>
                <h1 className="title">Tenzies</h1>
                <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current
                    value between rolls.</p>
                <div className="dice-container">
                    {diceComponents}
                </div>
                <button className="roll-dice"
                        onClick={rollDice}
                        ref={buttonRef}
                >{gameWon ? "New Game" : "Roll"}
                </button>
            </main>
        </>
    )
}