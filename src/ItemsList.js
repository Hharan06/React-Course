import React from "react"
import { FaRegTrashAlt } from "react-icons/fa";

const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (
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
  )
}

export default ItemsList