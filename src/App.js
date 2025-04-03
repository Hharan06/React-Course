import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {
    const [items, setItems] = useState([]);

    const [newItem, setNewItem] = useState("");

    const [searchItem, setSearchItem] = useState("");

    const [fetchError, setFetchError] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const API_URL = "http://localhost:3500/items";

    // useEffect(() => {
    //   console.log("Rendering")
    //   const storedItems = JSON.parse(localStorage.getItem("todo_list"));
    //   setItems(storedItems)
    // }, [])

    // npx json-server -p 3500 -w data/db.json
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await fetch(API_URL);
          const listItems = await response.json();
          setItems(listItems);
          setFetchError(null);
        } catch (error) {
          setFetchError(error.Message);
          console.log(error.stack);
        }
        finally{
          setIsLoading(false)
        }

      }
      (async () => fetchItems())()
    }, [])

    const addItem = async(item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1
      const addNewItem = {id,checked:false,item}
      const listItems = [...items, addNewItem]
      setItems(listItems)
      // localStorage.setItem("todo_list",JSON.stringify(listItems))

      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(addNewItem)
      }
      const result = await apiRequest(API_URL,postOptions)
      if(result) setFetchError(result)
    }
  
    const handleCheck = async(id) => {
          const listItems = items.map((item) => item.id===id ? {...item, checked:!item.checked} : item);
          setItems(listItems);
          // localStorage.setItem("todo_list",JSON.stringify(listItems))

          const myItem = listItems.filter((item) => item.id === id)

          const patchOptions =  {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({checked:myItem[0].checked})
          }
          const reqURL = `${API_URL}/${id}`
          const result = await apiRequest(reqURL,patchOptions)
          if(result) setFetchError(result)
      }
  
    const handleDelete = async(id) => {
          const listItems = items.filter((item) => item.id!== id)
          setItems(listItems)
          // localStorage.setItem("todo_list",JSON.stringify(listItems))

          const deleteOptions = {method: 'DELETE'}

          const reqURL = `${API_URL}/${id}`
          const result = await apiRequest(reqURL,deleteOptions)
          if(result) setFetchError(result)
      }

    const handleSubmit = (e) => {
      e.preventDefault()
      addItem(newItem)
      setNewItem('')
    }

  return (
    <div>
      <Header title="To Do List"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
      />
      <Content 
        items = {items.filter(item => 
          (item.item).toLowerCase()
          .includes(searchItem.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer
        length = {items.length}
      />
    </div>
  );
}

export default App;
