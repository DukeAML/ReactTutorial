import { useState } from "react"


export const GreatGrandChild = (props) => {
    const [newName, setNewName] = useState("");
    return (
        <div style={{border : "1px solid green", margin : 8}}>
            <h1>This is the great grandchild component</h1>
            <p>My number is {props.myNumber}</p>
            <p>My name is {props.myName}</p>
            <button onClick={() => props.setMyNumber(props.myNumber + 1)}>Increase my number</button>
            <input type="text" label="new name" onChange={(e) => setNewName(e.target.value)}></input>
            <button onClick={() => props.setMyName(newName)}>Set Name</button>
        </div>
    )
}