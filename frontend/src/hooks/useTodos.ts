import { createTodo, deleteTodo, getTodos, updateTodo } from "@/api/todos";
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

  // todoの新規作成
  const addTodo = async (data: TodoCreate) => {
    setError(null);
    try {
      const newTodo = await createTodo(data);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (e) {
      setError("Todoの作成に失敗しました。");
    }
  };

  // todoの更新
  const editTodo = async (id: number, data: TodoUpdate) => {
    setError(null);
    try {
      const updatedTodo = await updateTodo(id, data);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo)),
      );
    } catch (e) {
      setError("Todoの更新に失敗しました。");
    }
  };

  // todoの削除
  const removeTodo = async (id: number) => {
    setError(null);
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (e) {
      setError("Todoの削除に失敗しました。");
    }
  };

  // useTodosの返り値
};
