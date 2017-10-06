var Question = require('../models/question');
var Answer = require('../models/answers');

module.exports.ask = function (req, res) {
  var question = new Question(req.body);
   question.save(function (err) {
    if (err) {
      return res.status(422).json({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      console.log(req.body);
      res.json(question.content);
    }
  });
};
