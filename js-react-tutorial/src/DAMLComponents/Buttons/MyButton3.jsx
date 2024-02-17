/***
 * Component whose text will NOT update when the button is pressed
 * Key concept : failure to re-render without using hooks
 */

export function MyButton3(props){
    let counter = 0;

    return (
        <div>
            <p>The counter is {counter} </p>
            <button onClick={() => {
                counter = counter + 1;
                console.log("The counter is " + counter);
            }} >
                {props.buttonText}
            </button>
        </div>
        
    )
}

