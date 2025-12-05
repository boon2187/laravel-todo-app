export interface Todo {
  id: number;
  title: string;
  is_completed: boolean;
  due_date: string;
  created_at: string;
  updated_at: string;
}

export interface TodoCreate {
  title: string;
  due_date?: string;
}

export interface TodoUpdate {
  title: string;
  due_date?: string;
  is_completed: boolean;
}
