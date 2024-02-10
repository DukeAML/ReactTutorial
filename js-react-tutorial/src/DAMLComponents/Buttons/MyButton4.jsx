/**
 * Component whose text will update when the button is pressed
 * Key concept : useState
 */


import { useState } from "react";

export function MyButton4(props){
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <p>The counter is {counter} </p>
            <button onClick={() => {
                setCounter(counter + 1);
                console.log("The counter is " + counter);
            }} >
                {props.buttonText}
            </button>
        </div>
        
    )
}







