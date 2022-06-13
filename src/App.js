import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const getLocalStorage = () => {
  let list = localStorage.getItem("todos");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("todos")));
  } else {
    return [];
  }
};

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(getLocalStorage());
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed !== false));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Save Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Beys Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
