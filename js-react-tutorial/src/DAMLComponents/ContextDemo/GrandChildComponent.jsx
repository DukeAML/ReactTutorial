import { GreatGrandChild } from "./GreatGrandChildComponent"

export const GrandChild = () => {
    return (
        <div style={{margin : 8, border : "1px solid blue"}}>
            <h1>This is the grandchild component</h1>
            <GreatGrandChild/>
        </div>
    )
}