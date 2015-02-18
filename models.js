
var Mongoose = require('mongoose');


var PostsSchema = new Mongoose.Schema({
  		"title": String,
		"content": String,
		"upvotes": Number,
		"downvotes": Number
});

exports.Posts = Mongoose.model('Posts', PostsSchema);


