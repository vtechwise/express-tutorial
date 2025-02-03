const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide the name value" });
  }
  res.status(201).json({ success: true, person: name });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const person = people.find((person) => {
    return person.id === Number(req.params.id);
  });
  if (!person) {
    return res.status(400).json({
      success: true,
      msg: `No person match the given id: ${req.params.id}`,
    });
  }

  const newPerson = people.filter((person) => {
    return person.id !== Number(req.params.id);
  });
  return res.status(200).json({ succes: true, data: newPerson });
};

module.exports = {
  getPeople,
  createPerson,
    deletePerson,
  updatePerson
};
