export const isLoggedIn = async (c, next) => {
  const session = c.get('session');
  if (!session.get('logged')) {
    c.status(403);
    return c.body('You are not logged in');
  } else {
    await next();
  }
};
