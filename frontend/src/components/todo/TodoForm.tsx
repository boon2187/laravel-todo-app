import { TodoCreate } from "@/types/todo";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="新しいTODOを追加"
      />
      <Button type="submit">追加</Button>
    </form>
  );
}
