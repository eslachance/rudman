const express = require("express");
const session = require("express-session");

const authroutes = require("./authroutes");
const todoroutes = require("./todos");

const app = express();
const port = 3005;

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "you can count on me like 1, 2, 3 and I can count on you like 4, 3, 2",
  })
);
app.use(express.urlencoded({ extended: false }));

app.post("/api/login", async (req, res) => {
  if (!req.body.username || !req.body.password)
    res.status(400).send("Missing Username or Password");
  const success = req.body.password === "abcdef";
  if (success) {
    const user = { username: req.body.username };
    req.session.logged = true;
    req.session.username = user.username;
    req.session.save();
    console.log(`User authenticated: ${user.username}`);
    res.json({
      success: true,
      username: user.username,
    });
  } else {
    console.log("Authentication Failed");
    res.status(403).send("Nope. Not allowed, mate.");
  }
});

app.use("/api", authroutes);
app.use("/api", todoroutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

