import { Todo, TodoUpdate } from "@/types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => Promise<void>;
  onUpdate: (id: number, data: TodoUpdate) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export default function TodoList({
  todos,
  onToggle,
  onUpdate,
  onDelete,
}: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
