import { useState } from "react";
import Header from "./components/layout/Header";
import TodoList from "./components/todo/TodoList";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
