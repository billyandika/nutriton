var sixtyfourdegreesdata = require("../sixtyfourdegreesdata.json");

exports.view = function(req, res){
	res.render('sixtyfourdegrees', {"sixtyfourdegreesData" : sixtyfourdegreesdata});
};