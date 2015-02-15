var rootsdata = require("../rootsdata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(rootsdata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	rootsdata["rootsposts"].push(newMenu);
	
	res.render('roots', {"rootsData": rootsdata});
};