import { createStore } from "vuex";

export default createStore({
  state: {
    auth: {
      isLoggedIn: false,
      username: "",
    },
    todos: [],
  },
  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    },
    errorState(state, error) {
      console.error(error);
      state.error = error;
    },
    setTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    async login({ commit }, logindata) {
      fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logindata),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success) {
            commit("setAuth", {
              isLoggedIn: true,
              username: logindata.username,
            });
          } else {
            commit("errorState", res.error);
          }
        });
    },
    async logout({ commit }) {
      const res = await fetch("/api/logout").then((res) => res.json());
      if (res.success) {
        commit("setAuth", { isLoggedIn: false, username: "" });
      } else {
        commit("errorState", res.error);
      }
    },
    async fetchUser({ commit }) {
      const res = await fetch("/api/me").then((res) => res.json());
      if (res.success) {
        commit("setAuth", { isLoggedIn: true, username: res.username });
      } else {
        commit("errorState", res.error);
      }
    },
    async fetchAllTodos({ commit }) {
      commit("setTodos", await fetch("/api/todos").then((res) => res.json()));
    },
    async createTodo({ commit, state }, title) {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, completed: false }),
      }).then((res) => res.json());
      if (res.success) {
        commit(
          "setTodos",
          state.todos.concat({ title, completed: false, id: res.data.id })
        );
      } else {
        commit("errorState", res.error);
      }
    },
    async deleteTodo({ commit, state }, id) {
      const res = await fetch("/api/todos/" + id, { method: "DELETE" }).then(
        (res) => res.json()
      );
      if (res.success) {
        commit(
          "setTodos",
          state.todos.filter((item) => item.id !== id)
        );
      } else {
        commit("errorState", res.error);
      }
    },
    async toggleTodo({ commit, state }, id) {
      const res = await fetch("/api/todos/toggle/" + id).then((res) =>
        res.json()
      );
      if (res.success) {
        commit(
          "setTodos",
          state.todos.map((item) =>
            item.id === id ? { ...item, completed: !item.completed } : item
          )
        );
      } else {
        commit("errorState", res.error);
      }
    },
  },
  modules: {},
});
