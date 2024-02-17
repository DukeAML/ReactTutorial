import { useState } from "react";
import { Child } from "./Child";

//Without Context, notice how we have to pass everything to the descendant components through props!
//This can get easily get very messy and difficult to organize
export const ParentWithoutContext = () => {
    const [name, setName] = useState("Keith");
    const [number, setNumber] = useState(0);
    return (
        <div>
            <h1>This is the parent component</h1>
            <p>My number is {number}</p>
            <p>My name is {name}</p>
            <Child myName={name} myNumber={number} setMyName={setName} setMyNumber={setNumber}/>
        </div>
    )
}