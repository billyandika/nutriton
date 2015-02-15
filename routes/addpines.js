var pinesdata = require("../pinesdata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(pinesdata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	pinesdata["pinesposts"].push(newMenu);
	
	res.render('pines', {"pinesData": pinesdata});
};