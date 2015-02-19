var cafevdata = require("../cafevdata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(cafevdata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	cafevdata["cafevposts"].push(newMenu);
	
	res.render('cafev', {"cafevData": cafevdata});
};