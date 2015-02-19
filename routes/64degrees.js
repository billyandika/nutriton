var 64degreesdata = require("../64degreesdata.json");

exports.view = function(req, res){
	res.render('64degrees', {"64degreesData" : 64degreesdata});
};