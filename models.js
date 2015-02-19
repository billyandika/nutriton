
var Mongoose = require('mongoose');

var PostSchema = new Mongoose.Schema({
  		"title": String,
		"content": String,
		"upvotes": Number,
		"downvotes": Number
});

exports.Post = Mongoose.model('Post', PostSchema);
