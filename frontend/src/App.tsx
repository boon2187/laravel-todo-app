import { useState } from "react";
import Header from "./components/layout/Header";
import TodoList from "./components/todo/TodoList";
import TodoForm from "./components/todo/TodoForm";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
