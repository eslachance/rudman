import Router from '@koa/router';
import { koaBody } from 'koa-body';

const router = new Router();

router.use(koaBody());

const isLoggedIn = (ctx, next) => {
  if (!ctx?.session?.logged) {
    ctx.status = 403;
  } else {
    next();
  }
};

router.get('/logout', isLoggedIn, (ctx, next) => {
    ctx.session = null;
    ctx.body = {
      success: true,
    };
});

router.get('/me', isLoggedIn, (ctx, next) => {
    const user = { username: ctx.session.username };
    ctx.body = {
      success: true,
      username: user.username,
    };
});

export default router;