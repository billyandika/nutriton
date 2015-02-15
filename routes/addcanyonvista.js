var canyonvistadata = require("../canyonvistadata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(canyonvistadata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	canyonvistadata["canyonvistaposts"].push(newMenu);
	
	res.render('canyonvista', {"canyonData" : canyonvistadata});
};