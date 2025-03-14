export default function Die(props) {
    return (
            <button className='dice-item' style={{backgroundColor: props.isHeld && "#59E391"}}>{props.value}</button>
    )
}