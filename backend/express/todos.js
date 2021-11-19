const { v1: uuid } = require("uuid");
const express = require("express");
const app = express.Router();
app.use(express.json());

let todos = [
  {
    id: "abc123",
    title: "Visit [SolidJS](https://solidjs.com/) and get started!",
    completed: false,
  },
  {
    id: "def456",
    title: "Fork this repository and get to coding!",
    completed: false,
  },
  {
    id: "ghi789",
    title: "Join the [Discord](https://discord.gg/solidjs) community for help!",
    completed: false,
  },
];

const isLoggedIn = (req, res, next) => {
  if (!req?.session?.logged) {
    res.status(403);
  } else {
    next();
  }
};

app.get("/todos", isLoggedIn, (req, res) => {
  res.json(todos);
})

app.post("/todos", isLoggedIn, (req, res) => {
  console.log(req.body);
  const todo = {
    ...req.body,
    id: uuid(),
  }
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

app.get("/todos/toggle/:id", (request, reply) => {
  let todoID = request.params.id;
  todos = todos.map((todo) =>
    todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
  );
  res.json({ success: true });
});

module.exports = app;