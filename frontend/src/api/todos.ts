import axios from "axios";
import type { Todo, TodoCreate, TodoUpdate } from "@/types/todo";

const API_BASE = "/api/todos";

// 一覧取得
export const getTodos = async (): Promise<Todo[]> => {
  // TODO: 実装
  throw new Error("Not implemented");
};

// 新規作成
export const createTodo = async (data: TodoCreate): Promise<Todo> => {
  // TODO: 実装
  throw new Error("Not implemented");
};

// 更新
export const updateTodo = async (
  id: number,
  data: TodoUpdate
): Promise<Todo> => {
  // TODO: 実装
  throw new Error("Not implemented");
};

// 削除
export const deleteTodo = async (id: number): Promise<void> => {
  // TODO: 実装
  throw new Error("Not implemented");
};

// 完了トグル
export const toggleTodo = async (id: number): Promise<Todo> => {
  // TODO: 実装
  throw new Error("Not implemented");
};
