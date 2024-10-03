import React from "react";
import { useTodos } from "../components/useTodos";

const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useTodos();

  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className={todo.completed ? "completed" : ""}>
          <span onClick={() => toggleTodo(index)}>{todo.task}</span>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
