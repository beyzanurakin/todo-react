import React, { useEffect, useRef, useState } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
const Todo = (props) => {
  const { id, name, completed, key, toggleComplete, removeTodo } = props;
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

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
