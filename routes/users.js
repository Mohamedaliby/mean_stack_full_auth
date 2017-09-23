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
router.post('/login',
    passport.authenticate('local'),
    function (req, res) {
       res.status(200).json(req.body.username);
    });

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    usersController.getUserById(id, function (err, user) {
        done(err, user);
    });
})

passport.use(new LocalStrategy(function (username, password, done) {
    usersController.getUserByUsername(username, function (err, user) {
        if (err) throw err;
        if (!user) {
            return done(null, false, {alert:'wrong username'});
        }
        usersController.comparePassword(password, user.password, function (err, isMatch) {
            if (err) return done(err);
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, {alert:'wrong password'});
            }
        });
    });
}));
//login end **********************************
router.post('/logout', usersController.logout);




module.exports = router;
