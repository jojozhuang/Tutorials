var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SubmissionSchema = new Schema({
  username: { type: String, required: true, max: 100 },
  questionname: { type: String, required: true, max: 100 },
  solution: { type: String, required: true },
  language: { type: String, required: true }, // java, c, c++, javascript, python
  status: { type: Number, required: true }, // -1: not submitted, 10: pass, 20: fail
  timeupdated: { type: Date, default: Date.now },
  timesubmitted: { type: Date },
  runtime: { type: Number, default: 0 }
});

// Export the model
module.exports = mongoose.model("Submission", SubmissionSchema);
