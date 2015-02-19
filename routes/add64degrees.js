var 64degreesdata = require("../64degreesdata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(64degreesdata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	64degreesdata["64degreesposts"].push(newMenu);
	
	res.render('64degrees', {"64degreesData": 64degreesdata});
};