import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { TodoProvider } from "./components/useTodos";

import "./styles.css";

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Todo App with Custom Hooks</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
