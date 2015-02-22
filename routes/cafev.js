var cafevdata = require("../cafevdata.json");

exports.view = function(req, res){
	res.render('cafev', {"cafevData" : cafevdata});
};