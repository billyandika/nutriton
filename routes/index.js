/*
 var data = require('../data.json');

 exports.view = function(req, res){
 	console.log(data);
 	res.render('index', data);
};
*/



var models = require('../models');


exports.view = function(req, res){
	models.Post
		.find()
		.exec(renderPosts);

	function renderPosts(err, posts) {
		console.log(err);
		res.render('index', { 'posts': posts });
	}

};
