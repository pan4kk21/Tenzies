export default function Die(props) {
    return (
            <button
                className='dice-item'
                style={{backgroundColor: props.isHeld && "#59E391"}}
                onClick={() => props.hold(props.id)}
                aria-pressed={props.isHeld}
                aria-label={`Die with value ${props.value},
                ${props.isHeld ? 'held' : 'not held'}`}
            >
                {props.value}
            </button>
    )
}