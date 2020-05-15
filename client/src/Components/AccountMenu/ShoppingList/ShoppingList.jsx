import React, { useState } from "react";
import "./ShoppingList.css";

export default function AccountMenu() {
  const [todos, setTodos] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [complete, setComplete] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setTodos(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todos === "") return;
    setTodoList([...todoList, { id: Date.now(), text: todos }]);
    e.target.reset();
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id != id));
  };

  const completeTodo = () => {
    setComplete(!complete);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Item" onChange={handleChange} />
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              {todo.text}

              <span onClick={completeTodo} className={complete ? "done" : ""}>
                Y
              </span>
              <span onClick={() => removeTodo(todo.id)}>X</span>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}
