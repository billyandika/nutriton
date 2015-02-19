var goodysdata = require("../goodysdata.json");

exports.view = function(req, res){
	res.render('goodys', {"goodysData" : goodysdata});
};