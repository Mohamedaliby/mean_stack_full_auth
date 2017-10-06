var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({
    dest: './uploads'
});
var User = require('../models/user');
var usersController = require('../controllers/usersController');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
/*  Get all users */
router.get('/', function (req, res, next) {
    res.send('all users');
});

router.post('/register', upload.single('profileimage'), usersController.signup);

//**************************** login

//custom login 
router.post('/login',usersController.login);

//login end **********************************
router.post('/logout', usersController.logout);

module.exports = router;
