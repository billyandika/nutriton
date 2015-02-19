/*
 var data = require('../data.json');

 exports.view = function(req, res){
 	console.log(data);
 	res.render('index', data);
};
*/



var models = require('../models');


exports.view = function(req, res){
	console.log("00000");
	models.Post
		.find()
		.exec(renderPosts);
	console.log("1111");
	//console.log(res);

	function renderPosts(err, posts) {
		console.log(err);
		console.log(posts);
		console.log("2222");
		res.render('index', { 'posts': posts });
	}

};
