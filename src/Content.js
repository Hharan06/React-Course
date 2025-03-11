import React from "react"

const Content = () => {

    function handleNameChange() {
        const name = ["Grow","Earn","Give"];
        const int = Math.floor(Math.random()*3);
        return name[int];
    }

    return (
        <main>
            <p>Let {handleNameChange()} money</p>
        </main>
        
    )
}

export default Content