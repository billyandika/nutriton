var bistrodata = require("../bistrodata.json");

exports.view = function(req, res){
	res.render('bistro', {"bistroData" : bistrodata});
};