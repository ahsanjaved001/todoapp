const express = require('express');
const userController = require('./../controllers/userController');

const router = express.Router();

router
  .route('/login')
  .get(userController.loginUser);

router.post('/signup', userController.signup);

module.exports = router;