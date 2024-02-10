/**
 * Component which will fetch some data (a list of dog breeds) and print them out
 * Key Concept : useEffect
 */

import { useEffect } from "react";

export function DogsListPrintedNotShown() {
    useEffect(() => {
        fetchDogs();
        
    }, []);
    return (
        <p>Dogs List coming soon</p>
    )
}

async function fetchDogs() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    if (response.status < 300){
        const responseData = await response.json();
        console.log(responseData);
    }
}


