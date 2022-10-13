/* eslint-disable no-unreachable */
import React from "react";

function Form() {
  return (
    <form>
      <input type="text" placeholder="Enter a todo ..." className="todo_in" />
      <button className="=button-add" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
