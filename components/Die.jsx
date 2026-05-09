export default function App(props) {
    const heldStyle = { 
        backgroundColor: props.isHeld ? "lightgreen": "white"
    }
    return (
        <button 
            style={heldStyle}
            id={props.id}
            onClick={() => props.handler(props.id)}
        >
            {props.value}
        </button>)
}