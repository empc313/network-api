//Require express router
const router = require('express').Router();

// Set requirements (from thoughts-controller)
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughtController');

//GET
router.route('/').get(getAllThoughts).post(createThoughts);
// router.route('/:id').get(getThoughtsById)

//PUT
// .put(updateThoughts)

//Delete
// .delete(deleteThoughts);

// router.route("/:thoughtId/reactions").post(addReaction);

// router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;

