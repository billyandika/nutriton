var ovtdata = require("../ovtdata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(ovtdata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	ovtdata["ovtposts"].push(newMenu);
	
	res.render('ovt', {"ovtData": ovtdata});
};