import React, { useState } from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div class="container">
      <h1 className="titre">Todo List</h1>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <div>
        <Todolist todos={todos} setTodos={setTodos} />
      </div>
      <div className="footer">
        {" "}
        <h2 className="footer_title">By_@_Ady</h2>
      </div>
    </div>
  );
};

export default App;
