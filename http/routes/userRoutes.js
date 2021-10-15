const express = require('express');
const userController = require('./../controllers/userController');
const SuserController = require('./../controllers/user');
const authController = require('./../controllers/authController');

const controller = SuserController;

const router = express.Router();

router
  .route('/login')
  .post(controller.loginUser);

router
.route('/dashboard')
.get(authController.authentication ,controller.dashboard);

router.post('/signup', controller.signup);


module.exports = router;