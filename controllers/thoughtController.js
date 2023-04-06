const { Thoughts, Users, Reaction } = require("../models");

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
//Update Thought
async updateThoughts(req, res) {
    try {
      const thoughts = await Thoughts.findOneAndUpdate(req.params.thoughtId, req.body, {
        new: true,
      });
      if (!thoughts) {
        res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thoughts);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Delete Thought
  async deleteThoughts(req,res) {
    try {
        const thoughts = await Thoughts.findOneAndUpdate({_id:req.params.thoughtId});
        res.status(200).json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
  },
  //Create Reaction
  async addReaction(req, res) {
    try {
      const thoughts = await Thoughts.findOneAndUpdate(
          {_id:req.params.thoughtId},
          {$addToSet: {reactions: req.body}},
          {runValidators: true, new: true}
      );
      thoughts ? res.json(thoughts) : res.status(404).json({message: notFound});
  } catch (e) {
      res.status(500).json(e);
  }
},
  //Delete Reaction
  async deleteReaction(req, res) {
    try {
      const thoughts = await Thoughts.findOneAndUpdate(
          {_id: req.params.thoughtId},
          {$pull: {reactions: {reactionId: req.params.reactionId}}},
          {runValidators: true, new: true}
      );

      thoughts ? res.json(thoughts) : res.status(404).json({message: notFound});
  } catch (e) {
      res.status(500).json(e);
  }
},
};

module.exports = thoughtController;
