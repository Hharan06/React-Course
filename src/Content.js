import React from "react"
import { useState } from "react";

const Content = () => {
    const [word, setWord] = useState("Earn");

    function handleNameChange() {
        const name = ["Grow","Earn","Give"];
        const int = Math.floor(Math.random()*3);
        setWord(name[int]);
    }

    return (
        <main>
            <p>Let {word} money</p>
            <button onClick={handleNameChange}>Submit</button>
        </main>

    )
}

export default Content