/**
 * React component which will fetch some data and display it
 * Key concept : combination of useState and useEffect
 */

import { useEffect, useState } from "react";


export function DogsListDisplayed() {
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        fetchDogs(setDogs);
        
    }, []);

    return (
        <div>
            <h1>The dogs are</h1>
            <ul>
                {dogs.map((dog, index) => {
                    return (
                        <li key={index}>
                            <p>{dog}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

async function fetchDogs(setDogs) {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    if (response.status < 300){
        const responseData = await response.json();
        let nicelyFormattedDogs = dogFormatHelper(responseData);
        setDogs(nicelyFormattedDogs);
    }
}

function dogFormatHelper(responseData){
    //don't worry too much about the syntax details here - it's just formatting the API response into a cleaner list 
    let breeds = [];
    const entries = Object.entries(responseData.message);
    entries.forEach((breed, index) => {
        console.log(breed[0]);
        breeds.push(breed[0]);
    })
    return breeds;
}