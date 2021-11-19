import type { Store } from 'solid-js/store';

export type Todo = {
  id: string
  title: string
  completed: boolean
}

export type State = {
  auth: {
    isLoggedIn: boolean;
    username: string;
  };
  todos: Todo[];
};

export type Methods = {
  login(username: string, password: string): void;
  logout(): void;
  getUserInfo(): void;
  setAllTodos: (todos: Todo[]) => void;
  fetchAllTodos(filter?: string | undefined): void;
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export type AppStore = [Store<State>, Methods];