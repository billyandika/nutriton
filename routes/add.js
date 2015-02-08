var data = require("../data.json");

exports.addPost = function(req, res) {   
	// Your code goes here
	res.render('add'); // add.handlebars
	console.log(data);

	var newPost = {
		'title': req.query.title,
		'content': req.query.content,
	}

	data["posts"].push(newPost);
	
}