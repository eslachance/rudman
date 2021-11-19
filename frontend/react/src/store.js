import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const initiaState = {
  isPageLoaded: false,
  auth: {
    isLoggedIn: false,
    username: "",
  },
  todos: [],
};

const reducer = async (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      try {
        await fetch("/api/todos", {
          method: "POST",
          body: JSON.stringify(action.payload),
        });
        return { ...state, todos: state.todos.concat(action.payload) };
      } catch(err) {
        console.error(err);
        return {
          ...state,
          err
        }
      }
    case "DELETE_TODO":
      try {
        await fetch("/api/todos/" + action.payload, { method: "DELETE" });
        return {
          ...state,
          todos: state.todos.filter((a) => a.id !== action.payload),
        };
      } catch(err) {
        return {
          ...state,
          err,
        };
      }
    case "TOGGLE_TODO":
      try {
        await fetch("/api/todos/toggle/" + action.payload)
          .then((res) => res.json());
        return {
          ...state,
          todos: state.todos.map((a) => ({
            ...a,
            isComplete: a.id === action.payload ? !a.isComplete : a.isComplete,
          })),
        };
      } catch(err) {
        return {
          ...state,
          err,
        };
      }
    case "FETCH_ALL_TODOS":
      const allTodoRes = await fetch("/api/todos").then(res => res.json());
      return { ...state, todos: allTodoRes };
    case "LOGIN":
      const loginRes = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: action.payload.username, password: action.payload.password }),
      }).then((res) => res.json())
      if (loginRes.success) {
        return {
          ...state,
          auth: { isLoggedIn: true, username: action.payload.username },
          todos: []
        };
      } else {
        console.error(loginRes.error);
      }
      return state;
    case "LOGOUT":
      const logoutRes = await fetch("/api/logout").then((res) => res.json());
      if (logoutRes.success) {
        return {
          ...state,
          auth: { isLoggedIn: false, username: "" },
        };
      } else {
        console.error(logoutRes.error);
      }
      break;
    case "GET_USER_INFO":
      const tempState = { ...state }
      if (tempState.isPageLoaded) return state;
      tempState.isPageLoaded = true;
      const userInfo = await fetch("/api/me").then((res) => res.json());
      if (userInfo.success) {
        tempState.auth = { isLoggedIn: true, username: userInfo.username };
      } else {
        console.error(userInfo.error);
      }
      return tempState;
    default:
      return state;
  }
};

const useAsyncReducer = (reducer, initialState = null) => {
  const [state, setState] = useState(initialState);

  const dispatch = async (action) => {
    const result = reducer(state, action);
    if (typeof result.then === "function") {
      try {
        const newState = await result;
        setState(newState);
      } catch (err) {
        setState({ ...state, error: err });
      }
    } else {
      setState(result);
    }
  };

  return [state, dispatch];
};

const Store = ({ children }) => {
  const [state, dispatch] = useAsyncReducer(reducer, initiaState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
