import { GreatGrandChild } from "./GreatGrandChild"

export const GrandChild = (props) => {
    return (
        <div style={{margin : 8, border : "1px solid blue"}}>
            <h1>This is the grandchild component</h1>
            <GreatGrandChild myName={props.myName} myNumber={props.myNumber} setMyName={props.setMyName} setMyNumber={props.setMyNumber}/>
        </div>
    )
}