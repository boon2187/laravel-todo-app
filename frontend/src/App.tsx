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
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="mx-auto flex max-w-xl flex-col gap-6 px-4 py-8">
        <Header />
        <TodoForm onAddTodo={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodoCompletion}
          onUpdate={editTodo}
          onDelete={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
