import React from "react"
import { FaPlus } from "react-icons/fa"

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item:</label>
        <input 
            type="text" 
            autoFocus 
            placeholder="Add item" 
            name="addItem" 
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required />
        <button type="submit"><FaPlus role="button" /></button>
    </form>
  )
}

export default AddItem