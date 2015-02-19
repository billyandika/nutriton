var clubmeddata = require("../clubmeddata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(clubmeddata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	clubmeddata["clubmedposts"].push(newMenu);
	
	res.render('clubmed', {"clubmedData": clubmeddata});
};