import React, { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [input, setInput] = useState("");
  return (
    <div class="container">
      <h1 className="titre">Todo List</h1>

      <Form />
    </div>
  );
};

export default App;
