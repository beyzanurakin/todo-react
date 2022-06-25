import React from "react";

const TodoList = ({ filteredList, handleComplete, removeItem }) => {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filteredList.map((todo) => {
          return (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onClick={() => handleComplete(todo.id)}
                />
                <label>{todo.title}</label>
                <button
                  className="destroy"
                  onClick={() => removeItem(todo.id)}
                ></button>
              </div>
            </li>
          );
        })}
      </ul>

      <ul className="todo-list">
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn JavaScript</label>
            <button className="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TodoList;
