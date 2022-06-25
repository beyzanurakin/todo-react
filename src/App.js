import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
    setName("");
  };
  const addItem = () => {
    const newItem = {
      id: nanoid(),
      title: name,
      completed: false,
    };
    setList((list) => {
      return [...list, newItem];
    });
    setFilteredList((list) => {
      return [...list, newItem];
    });
  };
  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setFilteredList(newList);
  };
  const handleComplete = (id) => {
    let mapped = list.map((task) => {
      return task.id === id
        ? { ...task, completed: !task.completed }
        : { ...task };
    });
    setFilteredList(mapped);
    setList(mapped);
    console.log(list);
  };
  return (
    <div className="todoapp">
      <Form name={name} handleSubmit={handleSubmit} setName={setName} />
      <TodoList
        filteredList={filteredList}
        handleComplete={handleComplete}
        removeItem={removeItem}
      />
      <Footer filteredList={filteredList} setFilteredList={setFilteredList} />
    </div>
  );
}

export default App;
