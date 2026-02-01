import axios from "axios";
import type { Todo, TodoCreate, TodoUpdate } from "@/types/todo";

const API_BASE = "/api/todos";

// 一覧取得
export const getTodos = async (): Promise<Todo[]> => {
  // todoを返す
  const response = await axios.get<Todo[]>(API_BASE);
  return response.data;
};

// 新規作成
export const createTodo = async (data: TodoCreate): Promise<Todo> => {
  // dataつかって、新しいtodoを登録
  const response = await axios.post<Todo>(API_BASE, data);
  return response.data;
};

// 更新
export const updateTodo = async (
  id: number,
  data: TodoUpdate,
): Promise<Todo> => {
  // idのtodoをdataで更新
  const response = await axios.patch<Todo>(`${API_BASE}/${id}`, data);
  return response.data;
};

// 削除
export const deleteTodo = async (id: number): Promise<void> => {
  // idのtodoを削除
  await axios.delete(`${API_BASE}/${id}`);
};

// 完了トグル
export const toggleTodo = async (id: number): Promise<Todo> => {
  // idのtodoのis_completedをトグル
  const response = await axios.patch<Todo>(`${API_BASE}/${id}/toggle`);
  return response.data;
};
