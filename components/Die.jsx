export default function App(props) {
    const heldStyle = {
        backgroundColor: props.isHeld ? "lightgreen" : "white",
    };
    return (
        <button
            style={heldStyle}
            id={props.id}
            onClick={() => props.handler(props.id)}
            aria-pressed={props.isHeld}
            aria-label={`Die ${props.id} with value ${props.value} is ${props.isHeld ? "held" : "not held"}`}
        >
            {props.value}
        </button>
    );
}
