export const isLoggedIn = (req, res, next) => {
  if (!req?.session?.logged) {
    res.status(403);
  } else {
    next();
  }
};
