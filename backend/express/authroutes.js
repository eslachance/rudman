const express = require("express");
const app = express.Router();

app.use(express.json());

const isLoggedIn = (req, res, next) => {
  if (!req?.session?.logged) {
    res.status(403);
  } else {
    next();
  }
};

app.get("/logout", isLoggedIn, (req, res) => {
  req.session.destroy((err) => {
    if (err) console.log(`Error destroying session: ${err}`);
    res.json({
      success: true,
    });
  });
});

app.get("/me", isLoggedIn, (req, res) => {
  const user = { username: req.session.username };
  res.json({
    success: true,
    username: user.username,
  });
});

module.exports = app;