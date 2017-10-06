var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var questionsController = require('../controllers/questionsController');




router.get('/', function (req, res, next) {
    res.json('questions');
});

router.get('/question:id', function (req, res, next) {
    res.json('questions');
});




router.post('/ask',questionsController.ask);



module.exports = router;
