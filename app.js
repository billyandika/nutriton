
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var landing = require('./routes/landing');
// Example route
// var user = require('./routes/user');
var add = require('./routes/add');
var foodfinder = require('./routes/foodfinder');
var messages = require('./routes/messages');
var profile = require('./routes/profile');
var addcanyonvista = require('./routes/addcanyonvista');
var addpines = require('./routes/addpines');
var addroots = require('./routes/addroots');

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

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
