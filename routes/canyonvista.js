var canyonvistadata = require("../canyonvistadata.json");

exports.view = function(req, res){
	res.render('canyonvista', {"canyonData" : canyonvistadata});
};