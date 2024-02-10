/**
 * Simple React Component - a button that prints out a message when pressed
 * Key concept : JSX and React components
 */

export function MyButton1(){
    return (
        <button onClick={() => console.log("The button was pressed")} >
            Press me
        </button>
    )
}

