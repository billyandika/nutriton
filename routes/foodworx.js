var foodworxdata = require("../foodworxdata.json");





exports.view = function(req, res){
	res.render('foodworx', {"foodworxData" : foodworxdata});
};