import { Todo, TodoUpdate } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => Promise<void>;
  onUpdate: (id: number, data: TodoUpdate) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export default function TodoItem({
  todo,
  onToggle,
  onUpdate,
  onDelete,
}: TodoItemProps) {
  return ;
}
