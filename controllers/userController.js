
const { Users} = require("../models");


const userController = {
  
  // get all users
  getAllUsers(req, res) {
    Users.find({})
     .then(userData => res.json(userData))
     .catch(err => res.status(500).json(err))
  },
  //Get user by id
getUserById(req, res) {
  Users.findById(req.params.userId)
  .then(userData => res.json(userData))
  .catch(err => res.status(500).json(err));
},
//Create User
createUsers(req, res) {
  Users.create(req.body)
  .then(userData => res.json(userData))
  .catch(err => res.status(500).json(err));
}

//Update user 

//Delete User

//Add friend

//Delete friend
}


module.exports = userController
