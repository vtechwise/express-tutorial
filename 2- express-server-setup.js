const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Home page");
});
app.get("/about", (req, res) => {
  res.status(200).send("About us page");
});

app.all("*", (req, res) => {
  res.status(404).send("Resources not found");
});
app.listen(5000, () => {
  console.log("serve started at port 5000");
});
