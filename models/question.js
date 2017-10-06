var mongoose = require('mongoose');


module.exports = mongoose.model('Question', {
    user: String,
    userId: String,
    userImage: String, //not important now
    content: String,
    pageNumber: Number,
    date: {
        type: Date,
        default: Date.now
    },
    answers: [],
    answerCount: Number
});