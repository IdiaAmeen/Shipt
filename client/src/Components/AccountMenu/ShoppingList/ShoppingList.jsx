import React, { useState } from "react";
import "./ShoppingList.css";
import AddIcon from "../../../Assets/add-icon.svg";
import TrashIcon from "../../../Assets/trash-icon.svg";
import CheckIcon from "../../../Assets/check-icon.svg";

export default function ShoppingList(item, index) {
  const [value, setValue] = useState("");
  const [items, setItem] = useState([
    {
      name: "",
      completed: true,
    },
  ]);

  const addItem = (name) => {
    const newItems = [...items, { name, completed: false }];
    setItem(newItems);
  };

  const completeItem = (index) => {
    const newItems = [...items];
    newItems[index].completed = true;
    setItem(newItems);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItem(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setValue("");
  };

  return (
    <>
      <h1 className="Shopping-List">Shopping List</h1>
      <div className="Shopping-List-Form">
        <div className="Input-Section">
          <img className="Add-Icon" src={AddIcon} />

          <form onSubmit={handleSubmit}>
            <input
              className="Shopping-List-Input"
              type="text"
              value={value}
              placeholder="Add Item"
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        </div>
        <div className="List">
          {items.map((item, index) => (
            <li
              className={item.completed ? "Complete" : "Shopping-List-Items"}
              key={index}
            >
              {item.name}
              <button
                className={item.completed ? "Deleted" : "Shopping-List-Delete"}
                onClick={() => removeItem(index)}
              >
                <span className="Trash">
                  <img className="TrashIcon" src={TrashIcon} />
                </span>
              </button>
              <button
                className={item.completed ? "Checked" : "Shopping-List-Complete"}
                onClick={() => completeItem(index)}
              >
                <span className="Check">
                  <img className="CheckIcon" src={CheckIcon} />
                </span>
              </button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
