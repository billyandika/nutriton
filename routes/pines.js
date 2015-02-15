var pinesdata = require("../pinesdata.json");

exports.view = function(req, res){
	res.render('pines', {"pinesData" : pinesdata});
};