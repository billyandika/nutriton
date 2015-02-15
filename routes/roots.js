var rootsdata = require("../rootsdata.json");

exports.view = function(req, res){
	res.render('roots', {"rootsData" : rootsdata});
};