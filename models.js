
var Mongoose = require('mongoose');


var UserLoginSchema = new Mongoose.Schema({
  		"title": String,
		"date": Date,
		"summary": String,
		"image": String
});

exports.UserLogin = Mongoose.model('UserLogin', UserLoginSchema);


