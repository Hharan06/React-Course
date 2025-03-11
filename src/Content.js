import React from "react"

const Content = () => {

    function handleNameChange() {
        const name = ["Grow","Earn","Give"];
        const int = Math.floor(Math.random()*3);
        return name[int];
    }

    const handleClick = (name) => {
        console.log(`Hello ${name}`);
    }

    return (
        <main>
            <p>Let {handleNameChange()} money</p>
            <button onClick={() => handleClick("World")}>Submit</button>
        </main>
        
    )
}

export default Content