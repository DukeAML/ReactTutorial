import { createContext, useState } from "react";
import { Child } from "./ChildComponent";

export const DAMLContext = createContext({
	myName : "Keith",
    myNumber : 0,
    setMyName : (newName) => {},
    setMyNumber : (newNumber) => {}
});

export const ParentComponent = () => {
    const [name, setName] = useState("Keith");
    const [number, setNumber] = useState(0);
    return (
        <DAMLContext.Provider value={{myName : name, myNumber : number, setMyName : setName, setMyNumber : setNumber}}>
            <div>
                <h1>This is the parent component</h1>
                <p>My number is {number}</p>
                <p>My name is {name}</p>
                <Child/>
            </div>
        </DAMLContext.Provider>
    )
}