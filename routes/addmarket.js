var marketdata = require("../marketdata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(marketdata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	marketdata["marketposts"].push(newMenu);
	
	res.render('market', {"marketData": marketdata});
};