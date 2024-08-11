import Koa from 'koa';
import session from 'koa-session';
import Router from '@koa/router';
import { koaBody } from 'koa-body';

import authroutes from './authroutes.js';
import todoroutes from './todoroutes.js';

const port = process.env.PORT | 3005;

const app = new Koa();

app.keys = ['you can count on me like 1, 2, 3 and I can count on you like 4, 3, 2'];
const CONFIG = {
  key: 'koa.sess',
  maxAge: 86400000,
  // secure: true, /** (boolean) secure cookie **/
};
app.use(session(CONFIG, app));
app.use(koaBody());

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hello World!';
});

router.post('/api/login', async (ctx) => {
  if (!ctx.request.body.username || !ctx.request.body.password)
    ctx.status = 400;
  const success = ctx.request.body.password === "abcdef";
  if (success) {
    const user = { username: ctx.request.body.username };
    ctx.session.logged = true;
    ctx.session.username = user.username;
    ctx.session.save();
    console.log(`User authenticated: ${user.username}`);
    ctx.body = {
      success: true,
      username: user.username,
    };
  } else {
    console.log("Authentication Failed");
    ctx.status = 403;
    ctx.body = "Nope. Not allowed, mate.";
  }
});

router.use('/api', authroutes.routes());
router.use('/api', todoroutes.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);
console.log(`Listening On: http://localhost:${port}`);