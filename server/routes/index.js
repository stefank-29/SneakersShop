const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');

router.post(
    '/register',
    userController.validateRegister,
    userController.register,
    authController.login,
    authController.sendUser
);

router.post('/login', authController.login, authController.sendUser);
router.get('/logout', authController.logout);

router.get('/user', authController.isUserLoggedIn);

// Products

router.get('/products');
router.post('/products', productController.addProduct);

module.exports = router;
