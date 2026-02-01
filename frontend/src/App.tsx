import { useState } from "react";
import Header from "./components/layout/Header";
import TodoList from "./components/todo/TodoList";
import TodoForm from "./components/todo/TodoForm";
import { useTodos } from "./hooks/useTodos";

function App() {
  const {
    todos,
    loading,
    error,
    fetchTodos,
    addTodo,
    editTodo,
    removeTodo,
    toggleTodoCompletion,
  } = useTodos();
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <TodoForm onAddTodo={addTodo} />
      <TodoList />
    </div>
  );
}

export default App;
