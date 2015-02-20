
var models = require('../models');

exports.view = function(req, res){
	models.Post
		.find()
		.exec(renderPosts);

	function renderPosts(err, posts) {
		res.render('index', { 'posts': posts });
	}

};
	