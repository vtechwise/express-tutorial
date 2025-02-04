const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  console.log(name);

  if (name) {
    return res.status(200).send(`wlocme back ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

app.listen("5000", () => {
  console.log("server started at port 5000");
});
