const { Users } = require("../models");

const userController = {
  //GET all users
  getAllUsers(req, res) {
    Users.find({})
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  //GET user by id
  getUserById(req, res) {
    Users.findById(req.params.userid)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  //CREATE User
  createUsers(req, res) {
    Users.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  //UPDATE user
  updateUsers(req, res) {
    Users.findOneAndUpdate(req.params.id, req.body, { new: true })
      .then((userData) => {
        if (!userData) {
          returnres.status(404).json({ message: "no user with this id" });
        }
        res.json(userData);
      })
      .catch((err) => res.status(500).json(err));
  },
  //DELETE User
  deleteUser(req, res) {
    Users.findOneAndDelete(req.params.id)
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ messgae: "User not found" });
        }
        res.json({ message: "User Successfully Deleted!" });
      })
      .catch((err) => res.status(500).json(err));
  },
  //CREATE friend
  addFriend({ params }, res) {
    Users.findByIdAndUpdate(
      { _id: params.userid },
      { $addToSet: { friends: params.friendId } },
      { new: true, runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  
  //DELETE friend
  deleteFriend({ params }, res) {
    Users.findByIdAndUpdate(
      { _id: params.userid },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user with this id!" });
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

};

module.exports = userController;
