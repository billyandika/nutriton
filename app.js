
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
// var mongoose = require('mongoose');

var index = require('./routes/index');
var landing = require('./routes/landing');
// Example route
var add = require('./routes/add');
var foodfinder = require('./routes/foodfinder');
var messages = require('./routes/messages');
var profile = require('./routes/profile');
var addcanyonvista = require('./routes/addcanyonvista');
var addpines = require('./routes/addpines');
var addroots = require('./routes/addroots');
var canyonvista = require('./routes/canyonvista');
var pines = require('./routes/pines');
var roots = require('./routes/roots');

// Connect to the Mongo database, whether locally or on Heroku
// var local_database_name = 'posts'; // user login database
// var local_database_uri  = 'mongodb://localhost/' + local_database_name
// var database_uri = process.env.MONGOLAB_URI || local_database_uri
// mongoose.connect(database_uri);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// Add routes here
app.get('/',landing.view)
app.get('/index', index.view);
app.get('/add', add.addPost);
app.get('/messages', messages.view);
app.get('/foodfinder', foodfinder.view);
app.get('/profile', profile.view);
app.get('/addcanyonvista', addcanyonvista.addMenu);
app.get('/addpines', addpines.addMenu);
app.get('/addroots', addroots.addMenu);
app.get('/canyonvista', canyonvista.view);
app.get('/pines', pines.view);
app.get('/roots', roots.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
