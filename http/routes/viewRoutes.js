const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', viewsController.getLoginForm);

router.get('/signup', viewsController.getSignupForm);

router.get('/todo', authController.authentication, viewsController.getTodos);

router.get('/todo/new/', authController.authentication, viewsController.todoForm);

router.get('/todo/edit/:id', authController.authentication, viewsController.todoEditForm);

module.exports = router;