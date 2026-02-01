import { TodoCreate } from "@/types/todo";
import { useState } from "react";

interface TodoFormProps {
  onAddTodo: (data: TodoCreate) => Promise<void>;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      return;
    }
    const newTodo: TodoCreate = { title: title.trim() };
    await onAddTodo(newTodo);
    setTitle("");
  };
  return <div className="bg-blue-100">TodoForm</div>;
}
