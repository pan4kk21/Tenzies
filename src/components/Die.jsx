export default function Die(props) {
    return (
            <button
                className='dice-item'
                style={{backgroundColor: props.isHeld && "#59E391"}}
                onClick={() => props.hold(props.id)}
            >
                {props.value}
            </button>
    )
}