var ovtdata = require("../ovtdata.json");

exports.view = function(req, res){
	res.render('ovt', {"ovtData" : ovtdata});
};