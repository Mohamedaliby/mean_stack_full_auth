var mongoose = require('mongoose');

//only for Admins
module.exports = mongoose.model('Book', {

    subject: String,
    year: String,
    bookImage: String, //not important now
    title: String,
    pages: [],
    pagesCount: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('page', {
    pageNumber: Number,
    unit: String,
    questions: []
});


module.exports = mongoose.model('pageQuestions', {
    exercise: String,
    content: String,
    answer:String,
    pageId:String

});
