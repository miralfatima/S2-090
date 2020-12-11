var mongoose = require("mongoose");

var courseSchema = mongoose.Schema({
	id: String,
	name: String,
	duration: String,
	fee: Number,
});
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
