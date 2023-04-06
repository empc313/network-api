// Require express router
const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/userController');


  // GET
router.route('/').get(getAllUsers).post(createUsers);
router.route('/:userid').get(getUserById)

//PUT
.put(updateUsers)

//.delete(deleteUsers);

// //POST, DELETE
// router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)


module.exports = router; 