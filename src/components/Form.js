import React from "react";

const Form = ({ handleSubmit, name, setName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
    </form>
  );
};

export default Form;
