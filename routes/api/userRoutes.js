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


router.route('/').get(getAllUsers).post(createUsers);

// // GET, PUT, DELETE
// router.route('/:userid').get(getUserById).put(updateUsers).delete(deleteUsers);

// //POST, DELETE
// router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)


module.exports = router; 