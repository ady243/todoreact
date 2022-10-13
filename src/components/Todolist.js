import React from "react";
import { GrCheckmark, GrEdit, GrTrash } from "react-icons/gr";

const Todolist = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li className="list" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="result"
            onChange={(event) => event.preventDefault()}
          />

          <div className="row">
            <button className="button-complete task-button">
              <GrCheckmark />
            </button>
            <button className="button-edit task-button">
              <GrEdit />
            </button>
            <button className="button-delete task-button">
              <GrTrash />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todolist;
