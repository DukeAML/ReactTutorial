/**
 * Component whose text will update when the button is pressed
 * Key concept : useState
 */


import { useState } from "react";
import { MyButton2 } from "./MyButton2";

export function MyButton4(props){
    const [mySpecialName, jkfsdajklfjsdalkfj] = useState(0);
    const [counter2, setCounter2] = useState(1);

    return (
        <div>
            <p>The counter is {mySpecialName} </p>
            <p>The counter is {counter2} </p>
            <button onClick={() => {
                jkfsdajklfjsdalkfj(mySpecialName + 1);
                setCounter2(counter2 * 2);
                console.log("The counter is " + mySpecialName);
            }} >
                {props.buttonText}
            </button>


            <MyButton2 buttonText={counter2.toString()}/>
        </div>
        
    )
}







