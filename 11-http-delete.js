const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => {
    return person.id === Number(req.params.id);
  });
  if (!person) {
    return res
      .status(400)
      .json({
        success: true,
        msg: `No person match the given id: ${req.params.id}`,
      });
  }

  const newPerson = people.filter((person) => {
    return person.id !== Number(req.params.id);
  });
  return res.status(200).json({ succes: true, data: newPerson });
});

app.listen("5000", () => {
  console.log("server started at port 5000");
});
