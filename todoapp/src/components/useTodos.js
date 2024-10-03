import { useState, createContext, useContext } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { task, completed: false }]);
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export const useTodos = () => {
  return useContext(TodoContext);
};
