// Require express router
const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUsers,
    updateUsers,
    deleteUser,
    addFriend,
    deleteFriend
  } = require('../../controllers/userController');


  // GET, PUT, DELETE for users
router.route('/').get(getAllUsers).post(createUsers);
router.route('/:userid').get(getUserById)
.put(updateUsers)
.delete(deleteUser);

 //POST, DELETE for friends
router.route('/:id/friends/:friendId').post(addFriend)
.delete(deleteFriend)


module.exports = router; 