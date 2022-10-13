/* eslint-disable no-unused-vars */
import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a todo ..."
        className="todo_in"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button_add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
