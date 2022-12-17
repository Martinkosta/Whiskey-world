const express = require('express');
const router = express.Router();
const { authController, whiskeyController } = require('../controllers');
const { auth } = require('../utils');

router.get('/profile', auth(),authController.getProfileInfo);
router.put('/profile',whiskeyController.likedWhiskeys);

module.exports = router