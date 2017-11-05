var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema  = new Schema({
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

module.exports = mongoose.model('Question', QuestionSchema);



// without using a Schema *************

// module.exports = mongoose.model('Question', {
//     user: String,
//     userId: String,
//     userImage: String, //not important now
//     content: String,
//     pageNumber: Number,
//     date: {
//         type: Date,
//         default: Date.now
//     },
//     answers: [],
//     answerCount: Number
// });