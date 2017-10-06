var mongoose = require('mongoose');

module.exports =  mongoose.model('Aswers', {
    user: String,
    userId: String,
    userImage: String, //not important now
    question:{type:Scema.Types.ObjectId, ref:'Question'},
    content: String,
    date: {
        type: Date,
        default: Date.now
    },
    ups:Number,
    downs:Number
});