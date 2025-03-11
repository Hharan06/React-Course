import React from "react"
import { useState } from "react";

const Content = () => {

    function handleNameChange() {
        const name = ["Grow","Earn","Give"];
        const int = Math.floor(Math.random()*3);
        return name[int];
    }

    const [word, setWord] = useState("Earn");

    function setNewWord(){
        const new_word = handleNameChange();
        setWord(new_word);
    }

    return (
        <main>
            <p>Let {word} money</p>
            <button onClick={setNewWord}>Submit</button>
        </main>

    )
}

export default Content