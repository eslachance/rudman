import { Hono } from 'hono';
const router = new Hono();
import { randomUUID } from 'crypto';
import { isLoggedIn } from './utils.js';

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

router.get('/todos', isLoggedIn, (c) => {
  return c.json(todos);
});

router.post('/todos', isLoggedIn, async (c) => {
  const reqtype = c.req.raw.headers.get('content-type');
  const body = reqtype === 'application/json' ? await c.req.json() : await c.req.parseBody();
  const todo = {
    ...body,
    id: randomUUID(),
  };
  todos.push(todo);
  return c.json({ success: true, data: todo });
});

router.delete('/todos/:id', isLoggedIn, (c) => {
  const todoID = c.req.param('id');
  if (todos.some(({ id }) => todoID === id)) {
    todos = todos.filter(({ id }) => todoID !== id);
    return c.json({ success: true });
  } else {
    return c.json({ success: false, message: "Todo does not exist in DB" });
  }
});

router.get('/todos/toggle/:id', (c) => {
  const todoID = c.req.param('id');
  todos = todos.map((todo) =>
    todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
  );
  return c.json({ success: true });
});

export default router;