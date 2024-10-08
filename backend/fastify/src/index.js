import Fastify from 'fastify';
import fastifySession from '@fastify/session';
import fastifyCookie from '@fastify/cookie';
import fastifyFormbody from '@fastify/formbody';

import loginRoutes from "./autroutes.js";
import todos from "./todoroutes.js";

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
app.register(loginRoutes);

app.register(todos);

try {
  await app.listen({
    port: 3005,
    host: '0.0.0.0',
  });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
