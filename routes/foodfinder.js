var canyonvistadata = require("../canyonvistadata.json");
var can1 = require("../canyonvistadata.json");
var can2 = require("../canyonvistadata.json");
exports.view = function(req, res){
	res.render('foodfinder', {"can1" : can1, "can2" : can2, "canyonData" : canyonvistadata});
};

