const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { whiskeyController, postController } = require('../controllers');

// middleware that is specific to this router

router.get('/', whiskeyController.getWhiskeys);
router.post('/', auth(), whiskeyController.createWhiskey);

router.get('/:whiskeyId', whiskeyController.getWhiskey);
router.post('/:whiskeyId', auth(), postController.createPost);
router.put('/:whiskeyId', auth(), whiskeyController.subscribe);
router.put('/:whiskeyId/posts/:postId', auth(), postController.editPost);
router.delete('/:whiskeyId/posts/:postId', auth(), postController.deletePost);

// router.get('/my-trips/:id/reservations', auth(), whiskeyController.getReservations);

module.exports = router