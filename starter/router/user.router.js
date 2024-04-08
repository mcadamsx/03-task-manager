const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller')

router.get('/getAllUsers', userController.getAllUsers)
router.post('/getAllUsers', userController.addUser)

module.exports = router