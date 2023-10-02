async function routes(app) {
  app.addHook("preHandler", (request, reply, done) => {
    if (!request.session.authenticated) {
      reply.status(403);
    } else {
      done();
    }
  });

  app.get("/api/me", (request, reply) => {
    reply.send({
      success: true,
      username: request.session.username,
    });
  });

  app.get("/api/logout", (request, reply) => {
    request.destroySession((err) => {
      if (err) {
        reply.status(500);
        reply.send("Internal Server Error");
      } else {
        reply.send({
          success: true,
        });
      }
    });
  });
}

export default routes;