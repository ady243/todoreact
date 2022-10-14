import React from "react";
import { GrCheckmark, GrEdit, GrTrash } from "react-icons/gr";

const Todolist = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handlEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="result"
            // className={`list ${todo.completed ? "completed" : ""}`}
            onChange={(event) => event.preventDefault()}
          />

          <div className="row">
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <GrCheckmark />
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handlEdit(todo)}
            >
              <GrEdit />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <GrTrash />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Todolist;
