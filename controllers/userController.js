
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

//Add friend

//Delete friend
}


module.exports = userController
