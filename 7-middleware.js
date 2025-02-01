const express = require("express");
const app = express();
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().getFullYear();
  next();
  console.log(method, url, date);
};

app.get("/", logger, (req, res) => {
  res.send("Home page");
});

app.get("/about", logger, (req, res) => {
  res.send("about page");
});

app.listen("5000", () => {
  console.log("server started at port 5000");
});
