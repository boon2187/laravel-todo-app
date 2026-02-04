import { useEffect, useState } from "react";
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

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div>
        <TodoForm onAddTodo={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodoCompletion} onUpdate={editTodo} onDelete={removeTodo} />
      </div>
    </div>
  );
}

export default App;
