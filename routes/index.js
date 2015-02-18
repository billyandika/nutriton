// var data = require('../data.json');

// exports.view = function(req, res){
// 	console.log(data);
// 	res.render('index', data);
// };


var models = require('../models');

/*
 * GET home page.
 */

exports.view = function(req, res){

	models.Posts
		.find()
		.exec(renderPosts);

	function renderPosts(err, Posts) {
		res.render('index', { 'Posts': Posts });
	}

};