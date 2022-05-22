const express = require('express');
const userController = require('../controller/UserController');

const router = express.Router(); //

router.post('/sign-up', userController.registerUser);
router.post('/login', userController.loginUser);
module.exports = router;