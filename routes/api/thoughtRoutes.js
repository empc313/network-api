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

//GET, POST
router.route('/').get(getAllThoughts).post(createThoughts);
router.route('/:id').get(getThoughtsById)

//UPDATE Thought
// .put(updateThoughts)

//DELETE Thought
// .delete(deleteThoughts);

//CREATE Reaction
// router.route("/:thoughtId/reactions").post(addReaction);
//DELETE Reaction
// router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;

