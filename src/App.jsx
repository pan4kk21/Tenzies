import Die from "./components/Die.jsx"

export default function App() {
    return (
        <main>
            <div className="dice-container">
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
                <Die value={1} />
            </div>
        </main>
    )
}