import Fastify from 'fastify';
import fastifySession from 'fastify-session';
import fastifyCookie from 'fastify-cookie';
import fastifyFormbody from 'fastify-formbody';

const app = Fastify({
  logger: true,
});

app.register(fastifyCookie);
app.register(fastifyFormbody);
app.register(fastifySession, {
  cookieName: "sid",
  secret: "you can count on me like 1, 2, 3 and I can count on you like 4, 3, 2",
  cookie: { secure: false },
  expires: 1800000,
});

// only unprotected route
app.post("/api/login", (request, reply) => {
  const { username, password } = request.body;
  if (password === "abcdef") {
    request.session.authenticated = true;
    request.session.username = username;
    reply.send({
      success: true,
      username: request.session.username,
    });
  } else {
    reply.redirect(401, "/login");
  }
});

import loginRoutes from "./loginRoutes.mjs";
app.register(loginRoutes);

import todos from "./todos.mjs";
app.register(todos);

(async () => {
  try {
    await app.listen(3005, '0.0.0.0');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
})();
