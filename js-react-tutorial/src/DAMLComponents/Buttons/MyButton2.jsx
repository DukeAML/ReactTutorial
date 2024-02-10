/**
 * React component that takes in props to customize the text on the button
 * Key concept : props
 */

export function MyButton2(props){
    return (
        <button onClick={() => console.log("The button was pressed")} >
            {props.buttonText}
        </button>
    )
}

