var canyonvistadata = require("../canyonvistamenu.json");

exports.addMenu = function(req, res) {   
	// Your code goes here
	res.render('addcanyonvista'); // addcanyonvista.handlebars
	console.log(canyonvistadata);

	var newMenu = {
		'name': req.query.name,
		'type': req.query.type,
		'upvotes': 0,
		'downvotes': 0
	}

	canyonvistadata["canyonvistamenu"].push(newMenu);
	
}