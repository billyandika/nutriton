var foodworxdata = require("../foodworxdata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(foodworxdata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	foodworxdata["foodworxposts"].push(newMenu);
	
	res.render('foodworx', {"foodworxData": foodworxdata});
};