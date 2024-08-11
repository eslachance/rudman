import express from "express";
const app = express.Router();
import { isLoggedIn } from "./utils.js";

app.use(express.json());

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

export default app;