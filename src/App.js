import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
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
    <div>
      <Header title="To Do List"/>
      <Content 
        items = {items}
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
