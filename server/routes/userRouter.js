const express = require('express');
const router = express.Router();
const userController = require('../controller/userController.js');

router.post('/login', userController.login);
router.post('/register', userController.register);


module.exports = router;