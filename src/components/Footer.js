import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Footer = ({ filteredList, setFilteredList, list }) => {
  const [option, setOption] = useState("all");

  const filterItems = (category) => {
    if (option === "all") {
      return setFilteredList(list);
    }
    if (option === "active") {
      const newList = list.filter((item) => {
        return item.completed === false;
      });
      setFilteredList(newList);
    }
    if (option === "completed") {
      const newList = list.filter((item) => {
        return item.completed === true;
      });
      setFilteredList(newList);
    }
  };

  useEffect(() => {
    filterItems();
  }, [option]);
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected" onClick={() => setOption("all")}>
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className="selected"
              onClick={() => setOption("active")}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className="selected"
              onClick={() => setOption("completed")}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
};

export default Footer;
