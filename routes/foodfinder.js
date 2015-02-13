var canyonvistadata = require("../canyonvistadata.json");
var can1 = require("../canyonvistadata.json");
var can2 = require("../canyonvistadata.json");
exports.view = function(req, res){
	res.render('foodfinder', canyonvistadata, can1);
};