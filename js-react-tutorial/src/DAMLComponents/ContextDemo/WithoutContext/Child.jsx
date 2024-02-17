import { GrandChild } from "./GrandChild"

export const Child = (props) => {

    return (
        <div style={{border : "1px solid red", margin : 8}}>
            <h1>This is the child component</h1>
            <GrandChild myName={props.myName} myNumber={props.myNumber} setMyName={props.setMyName} setMyNumber={props.setMyNumber}/>
        </div>
    )
}