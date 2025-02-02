const express = require("express");
const app = express();
const { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => {
    return person.id === Number(id);
  });
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No person with the id of ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(201).json({ success: true, data: newPeople });
});

app.listen("5000", () => {
  console.log("server started at port 5000");
});
