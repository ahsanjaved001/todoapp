const express = require('express');
const viewsController = require('../controllers/viewsController');
const auth = require('./../middleware/auth');

const router = express.Router();

router.get('/', viewsController.getLoginForm);

router.get('/signup', viewsController.getSignupForm);

router.get('/todo', auth.authentication, viewsController.getTodos);

router.get('/todo/new/', auth.authentication, viewsController.todoForm);

router.get('/todo/edit/:id', auth.authentication, viewsController.todoEditForm);

module.exports = router;