var data = require("../data.json");

exports.addPost = function(req, res) {   
	// Your code goes here
	console.log(data);

	var newPost = {
		'title': req.query.title,
		'content': req.query.content,
		'upvotes': 0,
		'downvotes': 0
	}

	data["posts"].push(newPost);
	res.render('index', data); // add.handlebars
	
};