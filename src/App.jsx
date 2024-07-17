import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  // const items = ["Jeans", "Shirts", "Jackets", "Trousers"];
  const [items, setItems] = useState(["Jeans", "Shirts", "Trousers", "Belt"]);
  const [inputString, setInputString] = useState("");
  // const [searchString, setSearchString] = useState("");
  const [filteredItemArray, setFilteredItemArray] = useState(items);
  const addItemHandler = () => {
    const addItem = [...items, inputString];
    setItems(addItem);
    setInputString("");
  };

  const itemRemoveHandler = (indexToBeRemoved) => {
    console.log("Removed", indexToBeRemoved);
    const newItemsArray = items.filter((item, index) => {
      if (indexToBeRemoved === index) {
        return false;
      } else {
        return true;
      }
    });
    setItems(newItemsArray);
  };

  // useEffect(() => {
  //   console.log("UseEffect Run");
  // }, [inputString]);
  return (
    <div>
      <input
        type="text"
        placeholder="Add Item"
        value={inputString}
        onChange={(e) => {
          setInputString(e.target.value);
        }}
      />
      <button onClick={addItemHandler}>Add Item</button>
      <input
        type="text"
        placeholder="Search Item"
        onChange={(e) => {
          const searchString = e.target.value;
          const searchItem = items.filter((itemEntry) => {
            return itemEntry.toLowerCase().includes(searchString.toLowerCase());
          });
          setFilteredItemArray(searchItem);
        }}
      />
      {items.map((item, index) => {
        return (
          <Counter
            key={index}
            itemName={item}
            removeHandler={() => itemRemoveHandler(index)}
          />
        );
      })}
    </div>
  );
};

export default App;
