import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { sessionMiddleware, CookieStore } from 'hono-sessions';

import authroutes from './authroutes.js';
import todoroutes from './todoroutes.js';

const app = new Hono();
const store = new CookieStore();

const port = process.env.PORT | 3005;

app.use('*', sessionMiddleware({
  store,
  encryptionKey: 'you can count on me like 1, 2, 3 and I can count on you like 4, 3, 2',
  expireAfterSeconds: 86400,
  cookieOptions: {
    sameSite: 'Lax',
    path: '/',
    httpOnly: true,
  },
}));

app.get('/', (c) => c.text('Hono!'));

app.post('/api/login', async (c) => {
  const session = c.get('session');
  const reqtype = c.req.raw.headers.get('content-type');
  const body = reqtype === 'application/json' ? await c.req.json() : await c.req.parseBody();

  if (!body.username || !body.password) {
    c.status(400);
    return c.body('Missing Username or Password');
  }

  const success = body.password === "abcdef";
  if (success) {
    const user = { username: body.username };
    session.set('logged', true);
    session.set('username', user.username);
    console.log(`User authenticated: ${user.username}`);
    return c.json({
      success: true,
      username: user.username,
    });
  }
});

app.route('/api', authroutes);
app.route('/api', todoroutes);

serve({
  fetch: app.fetch,
  port,
}, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
