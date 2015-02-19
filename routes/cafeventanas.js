var canyonventanasdata = require("../cafevdata.json");

exports.view = function(req, res){
	res.render('cafeventanas', {"cafevData" : cafevdata});
};