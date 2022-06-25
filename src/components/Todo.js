import React, { useEffect, useRef, useState } from "react";

const Todo = (props) => {
  const { id, name, completed, toggleComplete, removeTodo } = props;
  const [isEditing, setEditing] = useState(false);

  const editButtonRef = useRef(null);

  const viewTemplate = (
    <div className={completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleComplete(id)}
        />
        <label
          ref={editButtonRef}
          onClick={() => setEditing(true)}
          htmlFor={id}
        >
          {name}
        </label>
        <button className="destroy" onClick={() => removeTodo(id)}></button>
      </div>
    </div>
  );
  const editingTemplate = (
    <div className={completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleComplete(id)}
        />
        <label onClick={() => setEditing(true)} htmlFor={id}>
          {name}
        </label>
        <button className="destroy" onClick={() => removeTodo(id)}></button>
      </div>
    </div>
  );
  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
};

export default Todo;
