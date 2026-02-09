import { Todo, TodoUpdate } from "@/types/todo";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";

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
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleUpdate = async () => {
    await onUpdate(todo.id, {
      title: editTitle,
      due_date: todo.due_date,
      is_completed: todo.is_completed,
    });
    setIsEditing(false);
  };
  const handleCancel = () => {
    setIsEditing(false);
    setEditTitle(todo.title);
  };
  return (
    <div className="flex">
      <Checkbox
        checked={todo.is_completed}
        onCheckedChange={() => onToggle(todo.id)}
      />
      <span className={todo.is_completed ? "line-through text-gray-500" : ""}>
        {isEditing ? (
          <Input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUpdate();
            }}
          />
        ) : (
          todo.title
        )}
      </span>
      {isEditing ? (
        <div>
          <Button onClick={handleUpdate}>更新</Button>
          <Button onClick={handleCancel}>キャンセル</Button>
        </div>
      ) : (
        <div>
          <Button onClick={() => setIsEditing(true)}>編集</Button>
          <Button onClick={() => onDelete(todo.id)}>削除</Button>
        </div>
      )}
    </div>
  );
}
