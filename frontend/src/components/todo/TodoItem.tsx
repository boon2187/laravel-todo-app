import { Todo, TodoUpdate } from "@/types/todo";
import { useState } from "react";
import { Input } from "../ui/input";
import { Check, Grip, Pencil, Trash2, X } from "lucide-react";

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
    <div className="flex items-center gap-3 rounded-lg bg-violet-500 px-4 py-3 text-white shadow-md">
      <Grip className="h-5 w-5 shrink-0 opacity-80" />

      {isEditing ? (
        <Input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleUpdate();
            if (e.key === "Escape") handleCancel();
          }}
          autoFocus
          className="flex-1 border-none bg-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/40"
        />
      ) : (
        <button
          type="button"
          onClick={() => onToggle(todo.id)}
          className={`flex-1 cursor-pointer text-left transition ${
            todo.is_completed ? "line-through opacity-50" : ""
          }`}
        >
          {todo.title}
        </button>
      )}

      {isEditing ? (
        <>
          <button
            type="button"
            onClick={handleUpdate}
            aria-label="更新"
            className="shrink-0 rounded p-1 transition hover:bg-white/20"
          >
            <Check className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleCancel}
            aria-label="キャンセル"
            className="shrink-0 rounded p-1 transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            aria-label="編集"
            className="shrink-0 rounded p-1 transition hover:bg-white/20"
          >
            <Pencil className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(todo.id)}
            aria-label="削除"
            className="shrink-0 rounded p-1 transition hover:bg-white/20"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}
