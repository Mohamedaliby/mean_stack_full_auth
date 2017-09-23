var User = require('../models/user');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports.signup = function (req, res, callback) {

    console.log(req.body);

    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    //File upload
    if (req.file) {
        console.log('file uploading...');
        var profileimage = req.file;
    } else {
        console.log('no file uploaded...');
        var profileimage = 'noimage.jpg';
    }

    //form validator
    req.check('name', 'Name field is required').notEmpty();
    req.check('email', 'email is not valid').isEmail();
    req.check('username', 'username field is requird').notEmpty();
    req.check('password', 'password field is requird').notEmpty();
    req.check('password2', 'passwords do not match').equals(req.body.password);
    //check error
    var errors = req.validationErrors();

    if (errors) {
        res.status(422).json(errors)
    } else {

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                req.body.password = hash;
                var user = new User(req.body);
                user.save(callback);
                res.json(req.body);
            });
        });

    }



}
//**********************************************************************
module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    var query = {
        username: username
    };
    User.findOne(query, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {

    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        callback(null, isMatch);
    });
}


module.exports.logout = function (req, res){
   req.logout();
   res.json('logged out');
}

// To change Passport Strategy
//    passport.use(new LocalStrategy({
//            usernameField: 'email',
//            passwordField: 'password'
//        },
//        function (username, password, done) {
//
//            User.findOne({
//                username: username
//            }, function (err, user) {
//
//                if (err) {
//                    return done(err);
//                }
//                if (!user) {
//                    return res.status(401).json({
//                    err: info
//                    });
//                }
//                if (user.password != password) {
//                    return done(null, false, {
//                        alert: 'Incorrect password.'
//                    });
//                }
//                return done(null, user);
//            });
//        }
//
//    ));
//
//
//
//