import { writable } from "svelte/store";

export function createTodos(initialValue = []) {
  const { subscribe, set, update } = writable(initialValue);

  return {
    subscribe,
    add(title, id) {
      const todo = {
        id,
        completed: false,
        title,
      };
      console.log(todo);
      update((prev) => {
        return [todo, ...prev];
      });
    },

    remove(todo) {
      update((prev) => prev.filter((t) => t !== todo));
    },

    toggle(id) {
      update(todos => todos.map(todo => 
        todo.id === id ? ({
          ...todo,
          completed: !todo.completed,
        }) : todo
      ))
    },

    fetchall() {
      fetch("/api/todos").then((res) => res.json())
        .then(res => set(res));
    },
    
    clear() {
      set([]);
    }
  };
}

export const todos = createTodos();