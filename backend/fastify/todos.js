import { randomUUID } from 'crypto';

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

async function todoRoutes(app) {
  app.addHook("preHandler", (request, reply, done) => {
    if (!request.session.authenticated) {
      reply.status(403);
    } else {
      done();
    }
  });

  app.get("/api/todos", (request, reply) => {
    reply.send(todos);
  });

  app.get("/api/search/:term", (request, reply) => {
    let term = request.params.term;
    const results = todos.filter((todo) => todo.title.includes(term));
    reply.send(results);
  });

  app.post("/api/todos", (request, reply) => {
    let attrs = JSON.parse(request.body);
    const id = randomUUID();
    todos.push({ ...attrs , id});
    reply.send({ success: true, data: { ...attrs, id } });
  });

  app.delete("/api/todos/:id", (request, reply) => {
    let todoID = request.params.id;
    if (todos.some(({ id }) => todoID === id)) {
      todos = todos.filter(({ id }) => todoID !== id);
      reply.send({ success: true });
    } else {
      reply.send({ success: false, message: "Todo does not exist in DB" });
    }
  });

  app.get("/api/todos/toggle/:id", (request, reply) => {
    let todoID = request.params.id;
    todos = todos.map((todo) =>
      todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
    );
    reply.send({ success: true });
  });
}

export default todoRoutes;
