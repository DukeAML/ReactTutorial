import { useContext, useState } from "react"
import { DAMLContext } from "./ParentComponent"

//Notice how this component does not need props! It uses context to get the state it shares with an ancestor component
export const GreatGrandChild = () => {
    const {myName, setMyName, myNumber, setMyNumber} = useContext(DAMLContext);
    const [newName, setNewName] = useState("");
    return (
        <div style={{border : "1px solid green", margin : 8}}>
            <h1>This is the great grandchild component</h1>
            <p>My number is {myNumber}</p>
            <p>My name is {myName}</p>
            <button onClick={() => setMyNumber(myNumber + 1)}>Increase my number</button>
            <input type="text" label="new name" onChange={(e) => setNewName(e.target.value)}></input>
            <button onClick={() => setMyName(newName)}>Set Name</button>
        </div>
    )
}