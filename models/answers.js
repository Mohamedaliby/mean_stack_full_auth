var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  mongoose.model('Aswers', {
    user: String,
    userId: String,
    userImage: String, //not important now
    question:{type: Schema.Types.ObjectId, ref:'Question'},
    content: String,
    date: {
        type: Date,
        default: Date.now
    },
    ups:Number,
    downs:Number
});