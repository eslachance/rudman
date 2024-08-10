import Router from '@koa/router';
import { koaBody } from 'koa-body';
import { randomUUID } from 'crypto';

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

const isLoggedIn = (ctx, next) => {
  if (!ctx?.session?.logged) {
    ctx.status = 403;
  } else {
    next();
  }
};

router.get('/todos', isLoggedIn, (ctx, next) => {
  ctx.body = todos;
});

router.post('/todos', isLoggedIn, (ctx, next) => {
  console.log(ctx.request.body);
  const todo = {
    ...ctx.request.body,
    id: randomUUID(),
  };
  todos.push(todo);
  ctx.body = { success: true, data: todo };
});

router.delete('/todos/:id', isLoggedIn, (ctx, next) => {
  const todoID = ctx.params.id;
  if (todos.some(({ id }) => todoID === id)) {
    todos = todos.filter(({ id }) => todoID !== id);
    ctx.body = { success: true };
  } else {
    ctx.body = { success: false, message: "Todo does not exist in DB" };
  }
});

router.get('/todos/toggle/:id', (ctx, next) => {
  let todoID = ctx.params.id;
  todos = todos.map((todo) =>
    todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
  );
  ctx.body = { success: true };
});

export default router;