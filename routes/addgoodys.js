var goodysdata = require("../goodysdata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(goodysdata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	goodysdata["goodysposts"].push(newMenu);
	
	res.render('goodys', {"goodysData": goodysdata});
};