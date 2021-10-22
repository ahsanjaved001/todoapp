const express = require('express');
const userController = require('./../controllers/userController');
const auth = require('./../middleware/auth');

const controller = userController;

const router = express.Router();

router
  .route('/login')
  .post(controller.loginUser);

router
  .route('/dashboard')
  .get(auth.authentication, controller.dashboard);

router.post('/signup', controller.signup);


module.exports = router;