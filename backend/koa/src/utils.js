export const isLoggedIn = (ctx, next) => {
  if (!ctx?.session?.logged) {
    ctx.status = 403;
  } else {
    next();
  }
};
