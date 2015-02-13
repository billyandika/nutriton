var canyonvistadata = require("../canyonvistadata.json");
var pinesdata = require("../pinesdata.json");
var rootsdata = require("../rootsdata.json");

exports.view = function(req, res){
	res.render('foodfinder', {"canyonData" : canyonvistadata, "pinesData": pinesdata, "rootsData": rootsdata});
};

