//sets up user router
const express = require('express');
const router = express.Router();

//import user functions from controllers 
const userCtrl = require('../controllers/user');

//sets up endpoints for user info
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//exports router
module.exports = router;