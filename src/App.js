import React from "react";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App({ tasks }) {
  const [list, setList] = useState(tasks);
  const [filter, setFilter] = useState("All");

  const addItem = (name) => {
    const newItem = {
      id: "todo-" + nanoid(),
      name: name,
      completed: false,
    };
    setList([...list, newItem]);
  };

  const removeTodo = (id) => {
    const remainingList = list.filter((todo) => todo.id !== id);
    setList(remainingList);
  };

  const toggleComplete = (id) => {
    const updatedList = list.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setList(updatedList);
  };

  const todoList = list
    .filter(FILTER_MAP[filter])
    .map((todo) => (
      <Todo
        id={todo.id}
        name={todo.name}
        completed={todo.completed}
        key={todo.id}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    ));
  const filterList = FILTER_NAMES.map((name) => (
    <button
      className="filters-button"
      key={name}
      name={name}
      onClick={() => {
        setFilter(name);
      }}
    >
      {name}
    </button>
  ));
  const tasksNoun = list.length !== 1 ? "list" : "todo";
  const headingText = `${list.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp">
      <Form addItem={addItem} />
      <ul className="todo-list">{todoList}</ul>
      <div className="footer">
        <span className="todo-count">{headingText}</span>
        {filterList}
        <button className="clear-completed" onClick={() => setList([])}>
          Clear completed
        </button>
      </div>
    </div>
  );
}

export default App;
