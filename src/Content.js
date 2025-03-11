import React from "react"
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Content = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "Practice Coding"
        },
        {
            id: 2,
            checked: false,
            item: "Play Cricket"
        },
        {
            id: 3,
            checked: true,
            item: "Read books"
        },
    ])

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item);
        setItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id!== id)
        setItems(listItems)
    }
    
    return (
        <main>
            {items.length ? (
                <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input type="checkbox" checked = {item.checked} onClick={() => handleCheck(item.id)}/>
                        <label 
                        style={item.checked ? {textDecoration: 'line-through'} : null}>
                            {item.item}</label>
                        <FaRegTrashAlt 
                            role="button"
                            tabIndex="0"
                            onClick={() => handleDelete(item.id)}
                        />
                    </li>
                ))}
            </ul>
            ) : (
                <p>List is Empty</p>
            )}
            
        </main>

    )
}

export default Content