import * as express from 'express';
import UserController from '../Controllers/userController';
import AuthController from '../Controllers/AuthController';
import auth from '../Middleware/Auth';

const router = express.Router();
const userController = new UserController();
const authController = new AuthController();

router
  .route('/login')
  .post(authController.loginUser);

  router
  .route('/google')
  .get(authController.getUrlForGoogleUser);

  router
  .route('/google/callback')
  .get(authController.getGoogleUserProfile);

router
  .route('/dashboard')
  .get(auth.authenticate, userController.dashboard);

router.post('/signup', authController.signUp);

router.post('/update', auth.authenticate, userController.updateMe);


export default router;