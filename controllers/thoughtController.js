const { Thoughts, Users } = require('../models');

const thoughtController = {
    //Get all Thoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
         .then(thoughtData => res.json(thoughtData))
         .catch(err => res.status(500).json(err))
      },
//Get Thought by id
//Create Thought
async createThoughts(req, res) {
    try {
      const thought = await Thoughts.create(req.body);
      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },



}

module.exports = thoughtController;