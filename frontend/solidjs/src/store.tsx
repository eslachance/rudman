import { createContext, useContext, Component } from 'solid-js';
import { createStore } from 'solid-js/store';

import type { Todo, AppStore, State } from './types';

const AppContext = createContext<AppStore>();

export const AppProvider: Component = (props) => {
  const [state, setState] = createStore<State>({
    auth: {
      isLoggedIn: false,
      username: '',
    },
    todos: [] as Todo[],
  });

  const methods = {
    login(username: string, password: string) {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            setState('auth', { isLoggedIn: true, username });
            methods.fetchAllTodos();
          } else {
            console.error(res.error);
          }
        });
    },
    logout() {
      fetch('/api/logout')
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            setState('auth', { isLoggedIn: false, username: '' });
            methods.setAllTodos([]);
          } else {
            console.error(res.error);
          }
        });
    },
    getUserInfo() {
      fetch('/api/me')
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            setState('auth', { isLoggedIn: true, username: res.username });
            methods.fetchAllTodos();
          } else {
            console.error(res.error);
          }
        });
    },

    // Todo-related routes, for implementation example.
    setAllTodos: (todos: Todo[]) => {
      setState('todos', todos);
    },
    fetchAllTodos(filter?: string) {
      const endpoint =
        filter && filter.length > 0
          ? `/api/search/${encodeURI(filter)}`
          : '/api/todos';

      fetch(endpoint)
        .then((r) => r.json())
        .then(methods.setAllTodos);
    },
    addTodo: (newTodo: Todo) => {
      fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo),
      })
        .then(() => {
          setState('todos', (existingTodos) => existingTodos.concat(newTodo));
        })
        .catch((e) => console.log(e));
    },
    deleteTodo: (id: string) => {
      console.log(id);
      fetch('/api/todos/' + id, { method: 'DELETE' })
        .then(() => {
          setState('todos', (prev) =>
            prev.filter((item: Todo) => item.id !== id),
          );
        })
        .catch((e) => console.log(e));
    },
    toggleTodo: (id: string) => {
      fetch('/api/todos/toggle/' + id)
        .then((res) => res.json())
        .then((todo) => {
          setState('todos', (prev) =>
            prev.map((item: Todo) => (item.id === id ? todo : item)),
          );
        })
        .catch((e) => console.log(e));
    },
  };

  const store = [state, methods] as AppStore;

  return (
    <AppContext.Provider value={store}>{props.children}</AppContext.Provider>
  );
};

export const useStore = (): AppStore => useContext(AppContext) as AppStore;