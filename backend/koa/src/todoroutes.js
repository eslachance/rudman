import Router from '@koa/router';
import { koaBody } from 'koa-body';
import { randomUUID } from 'crypto';
import { isLoggedIn } from './utils.js';

const router = new Router();
router.use(koaBody());

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

router.get('/todos', isLoggedIn, (ctx) => {
  ctx.body = todos;
});

router.post('/todos', isLoggedIn, (ctx) => {
  const todo = {
    ...ctx.request.body,
    id: randomUUID(),
  };
  todos.push(todo);
  ctx.body = { success: true, data: todo };
});

router.delete('/todos/:id', isLoggedIn, (ctx) => {
  const todoID = ctx.params.id;
  if (todos.some(({ id }) => todoID === id)) {
    todos = todos.filter(({ id }) => todoID !== id);
    ctx.body = { success: true };
  } else {
    ctx.body = { success: false, message: "Todo does not exist in DB" };
  }
});

router.get('/todos/toggle/:id', (ctx) => {
  let todoID = ctx.params.id;
  todos = todos.map((todo) =>
    todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
  );
  ctx.body = { success: true };
});

export default router;