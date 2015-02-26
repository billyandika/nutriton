var bistrodata = require("../bistrodata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(bistrodata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	bistrodata["bistroposts"].push(newMenu);
	
	res.render('bistro', {"bistroData": bistrodata});
};