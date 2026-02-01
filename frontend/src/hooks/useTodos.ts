import { getTodos } from "@/api/todos";
import { Todo, TodoCreate, TodoUpdate } from "@/types/todo";
import { useState } from "react";

interface UseTodosReturn {
  // state
  todos: Todo[];
  loading: boolean;
  error: string | null;

  // actions
  fetchTodos: () => Promise<void>;
  addTodo(data: TodoCreate): Promise<void>;
  editTodo(id: number, data: TodoUpdate): Promise<void>;
  removeTodo(id: number): Promise<void>;
  toggleTodoCompletion(id: number): Promise<void>;
}

export const useTodos = (): UseTodosReturn => {
  // stateの定義
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // actionsの定義・実装
  // todo一覧取得
  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (e) {
      setError("Todoの取得に失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  // useTodosの返り値
};
