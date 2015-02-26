var marketdata = require("../marketdata.json");

exports.view = function(req, res){
	res.render('market', {"marketData" : marketdata});
};