
const { Users} = require("../models");


const userController = {
  
  //GET all users
  getAllUsers(req, res) {
    Users.find({})
     .then(userData => res.json(userData))
     .catch(err => res.status(500).json(err))
  },
  //GET user by id
getUserById(req, res) {
  Users.findById(req.params.userid)
  .then(userData => res.json(userData))
  .catch(err => res.status(500).json(err));
},
//Create User
createUsers(req, res) {
  Users.create(req.body)
  .then(userData => res.json(userData))
  .catch(err => res.status(500).json(err));
},
//Update user 
updateUsers(req, res) {
  Users.findOneAndUpdate(req.params.id, req.body, {new:true})
  .then(userData => {
    if (!userData) {
      returnres.status(404).json({message: "no user with this id"})
    }
    res.json(userData);
  })
  .catch(err => res.status(500).json(err))
},
//Delete User
deleteUser(req, res) {
  Users.findOneAndDelete(req.params.id)
  .then(userData => {
    if (!userData) {
      return res.status(404).json({messgae:"User not found"});
    }
    res.json({message: "User Deleted!"});
  })
  .catch(err  => res.status(500).json(err));
},
//Add friend

//Delete friend
}


module.exports = userController
