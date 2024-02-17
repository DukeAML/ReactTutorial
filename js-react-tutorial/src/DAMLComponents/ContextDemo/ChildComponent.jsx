import { useContext } from "react"
import { DAMLContext } from "./ParentComponent"
import { GrandChild } from "./GrandChildComponent"

export const Child = () => {

    return (
        <div style={{border : "1px solid red", margin : 8}}>
            <h1>This is the child component</h1>
            <GrandChild/>
        </div>
    )
}