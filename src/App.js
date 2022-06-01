import { useState } from "react";
import classes from "./App.module.css";

function App() {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState([]);

  const addNewItem = () => {
    const updatedItems = [...items];
    updatedItems.push(itemName);
    setItems(updatedItems);
    setItemName("");
  };

  const onChangeItem = (e) => {
    setItemName(e.target.value);
  };

  return (
    <div className={classes.App}>
      <div className={classes.newItem}>
        <input
          value={itemName}
          onChange={onChangeItem}
          type="text"
          placeholder="e.g. Cat Food"
        />
        <button onClick={addNewItem}>Add Todo</button>
      </div>

      <ul className={classes.items}>
        {items.map((item, index) => (
          <li key={index} className={classes.item}>
            {item} <span className={classes.deleteItem}>❌</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
