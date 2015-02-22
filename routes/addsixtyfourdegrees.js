var sixtyfourdegreesdata = require("../sixtyfourdegreesdata.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	console.log(sixtyfourdegreesdata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	sixtyfourdegreesdata["sixtyfourdegreesposts"].push(newMenu);
	
	res.render('sixtyfourdegrees', {"sixtyfourdegreesData": sixtyfourdegreesdata});
};