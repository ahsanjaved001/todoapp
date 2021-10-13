const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/login')
  .post(userController.loginUser);

router
.route('/dashboard')
.get(authController.authentication ,userController.dashboard);

router.post('/signup', userController.signup);


module.exports = router;