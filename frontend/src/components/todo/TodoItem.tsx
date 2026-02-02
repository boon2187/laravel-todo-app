import { Todo, TodoUpdate } from "@/types/todo";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

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
  return (
    <div className="flex">
      <Checkbox
        checked={todo.is_completed}
        onCheckedChange={() => onToggle(todo.id)}
      />
      <span className={todo.is_completed ? "line-through text-gray-500" : ""}>
        {todo.title}
      </span>
      <Button onClick={() => onDelete(todo.id)}>削除</Button>
    </div>
  );
}
