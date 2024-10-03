import React, { useState } from "react";
import { useTodos } from "../components/useTodos";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task);
    setTask("");
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
