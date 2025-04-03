import React from "react"
import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef()        //For Focus Hnadling
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item:</label>
        <input 
            type="text"
            autoFocus
            ref={inputRef} 
            placeholder="Add item" 
            name="addItem" 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required />
        <button type="submit" 
        onClick={() => inputRef.current.focus()}><FaPlus role="button" /></button>
    </form>
  )
}

export default AddItem