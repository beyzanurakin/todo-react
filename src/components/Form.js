import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    addItem(name);
    setName("");
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={name}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
};

export default Form;
