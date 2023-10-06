import { writable } from "svelte/store";
import { todos } from '../stores/todos.js';

export function createLoginStore() {
  const { subscribe, set, update } = writable({ loggedIn: false, username: '' });

  return {
    subscribe,
    login(username, password) {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((res) => res.json())
      .then(res => {
        console.log(res);
        if(res.success) {
          set({
            loggedIn: true,
            username,
          });
          todos.fetchall();
        } else {
          set({
            loggedIn: false,
            username: ''
          });
          console.error(res.error);
        }
      })
    },
    logout() {
      fetch('/api/logout')
        .then(res => res.json())
        .then(res => {
          if(res.success) {
            set({ loggedIn: false, username: ''});
            todos.clear();
          }
        })
    },
    check() {
      fetch('/api/me').then((res) => res.json())
        .then(res => {
        if(res.success) {
          set({
            loggedIn: true,
            username: res.username,
          });
          todos.fetchall();
        } else {
          set({
            loggedIn: false,
            username: ''
          });
          console.error(res.error);
        }
        })
    }
  }
}

export const loginStore = createLoginStore();
