import { Hono } from 'hono';
const router = new Hono();
import { isLoggedIn } from './utils.js';

router.get('/logout', isLoggedIn, (c) => {
  const session = c.get('session');
  session.deleteSession();
  return c.json({
    success: true,
  });
});

router.get('/me', isLoggedIn, (c) => {
  const session = c.get('session');
  return c.json({
    success: true,
    username: session.get('username'),
  });
});

export default router;
