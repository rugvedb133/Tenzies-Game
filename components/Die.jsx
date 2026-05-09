export default function App(props) {
    const heldStyle = { backgroundColor: "lightgreen" }
    return (<button style={props.isHeld ? heldStyle : null}>{props.value}</button>)
}