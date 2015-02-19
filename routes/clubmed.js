var clubmeddata = require("../clubmeddata.json");

exports.view = function(req, res){
	res.render('clubmed', {"clubmedData" : clubmeddata});
};