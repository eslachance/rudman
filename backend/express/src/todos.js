import { randomUUID } from "crypto";
import express from "express";
import { isLoggedIn } from "./utils.js";

const app = express.Router();
app.use(express.json());

let todos = [
  {
    id: "abc123",
    title:
      "Visit [Rudman Github](https://github.com/eslachance/rudman/) and get started!",
    completed: false,
  },
  {
    id: "def456",
    title: "Fork this repository and get to coding!",
    completed: false,
  },
  {
    id: "ghi789",
    title: "Join the [Discord](https://discord.gg/code) community for help!",
    completed: false,
  },
];

app.get("/todos", isLoggedIn, (req, res) => {
  res.json(todos);
});

app.post("/todos", isLoggedIn, (req, res) => {
  const todo = {
    ...req.body,
    id: randomUUID(),
  };
  todos.push(todo);
  res.json({ success: true, data: todo });
});

app.delete("/todos/:id", isLoggedIn, (req, res) => {
  const todoID = req.params.id;
  if (todos.some(({ id }) => todoID === id)) {
    todos = todos.filter(({ id }) => todoID !== id);
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Todo does not exist in DB" });
  }
});

app.get("/todos/toggle/:id", (request, res) => {
  let todoID = request.params.id;
  todos = todos.map((todo) =>
    todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
  );
  res.json({ success: true });
});

export default app;