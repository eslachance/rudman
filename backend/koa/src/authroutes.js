import Router from '@koa/router';
import { koaBody } from 'koa-body';
import { isLoggedIn } from './utils.js';

const router = new Router();

router.use(koaBody());

router.get('/logout', isLoggedIn, (ctx) => {
  ctx.session = null;
  ctx.body = {
    success: true,
  };
});

router.get('/me', isLoggedIn, (ctx) => {
  const user = { username: ctx.session.username };
  ctx.body = {
    success: true,
    username: user.username,
  };
});

export default router;
