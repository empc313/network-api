const { Thoughts, Users } = require("../models");

const thoughtController = {
  //GET all Thoughts
  getAllThoughts(req, res) {
    Thoughts.find({})
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => res.status(500).json(err));
  },
  //GET Thought by id
  async getThoughtsById(req,res) {
try {
    const thoughts = await Thoughts.findById(req.params.id)
    if (!thoughts) {
        res.status(404).json({message: "Thought Not Found"});
    } else {
        res.json(thoughts);
    }
} catch (err) {
    res.status(500).json(err);
}
  },
  //Create Thought
  async createThoughts(req, res) {
    try {
      const thought = await Thoughts.create(req.body);
      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Delete Thought
  //Create Reaction
  //Delete Reaction
};

module.exports = thoughtController;
