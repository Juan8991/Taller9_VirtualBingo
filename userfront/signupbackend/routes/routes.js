const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const controller = require('../controller/controller')

router.post('/user/singup',controller.saveUser)
router.post('/user/login',controller.loginUser)

module.exports = router;