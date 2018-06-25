var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  sequence: { type: Number, required: true },
  title: { type: String, required: true, max: 50 },
  description: { type: String, required: true },
  mainfunction: { type: String, required: true },
  difficulty: { type: String, required: true }
});

// Export the model
module.exports = mongoose.model("Question", QuestionSchema);
