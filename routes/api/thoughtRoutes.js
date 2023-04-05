// Require express router
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

