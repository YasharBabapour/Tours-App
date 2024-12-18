const express = require('express');
const AuthController = require('../controllers/auth.controller');
const { authenticatedUser } = require('../middleware/auth.middleware');

const router = express.Router();
const authController = new AuthController();

router.post('/sign-up', authController.signUp);

router.post('/login', authController.login);

router.get('/profile', authenticatedUser, authController.getProfile);


module.exports = router;
