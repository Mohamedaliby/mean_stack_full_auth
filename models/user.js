var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

module.exports = mongoose.model('User', {
    name: String,
    email: String,
    username: String,
    password: String,
    profileimage: String
});

//var User = new Schema({
//    name: String,
//    email: String,
//    username: String,
//    password: String,
//    profileimage: String
//});
//
//User.methods.authenticate = function(password) {
//  //implementation code goes here
//}
//
//
//
//module.exports = mongoose.model('User', User);
