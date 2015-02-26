
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var mongoose = require('mongoose');

var index = require('./routes/index');
var post = require('./routes/post');
// Example route
var landing = require('./routes/landing');
var foodfinder = require('./routes/foodfinder');
var help = require('./routes/help');
var profile = require('./routes/profile');
var addcanyonvista = require('./routes/addcanyonvista');
var addpines = require('./routes/addpines');
var addroots = require('./routes/addroots');
var addbistro = require('./routes/addbistro');
var addcafev = require('./routes/addcafeventanas');
var addclubmed = require('./routes/addclubmed');
var addfoodworx = require('./routes/addfoodworx');
var addgoodys = require('./routes/addgoodys');
var addovt = require('./routes/addovt');
var addsixtyfourdegrees = require('./routes/addsixtyfourdegrees');
var addmarket = require('./routes/addmarket');

var canyonvista = require('./routes/canyonvista');
var pines = require('./routes/pines');
var roots = require('./routes/roots');
var bistro = require('./routes/bistro');
var cafev = require('./routes/cafev');
var clubmed = require('./routes/clubmed');
var foodworx = require('./routes/foodworx');
var goodys = require('./routes/goodys');
var ovt = require('./routes/ovt');
var sixtyfourdegrees = require('./routes/sixtyfourdegrees');
var market = require('./routes/market');

// Connect to the Mongo database, whether locally or on Heroku
var local_database_name = 'nutriton';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);

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
app.get('/index/post/:id', post.postInfo);
app.post('/index/post/new', post.addPost);
app.post('/index/post/:id/delete', post.deletePost);

// Other pages
app.get('/help', help.view);
app.get('/foodfinder', foodfinder.view);
app.get('/profile', profile.view);
app.get('/addcanyonvista', addcanyonvista.addMenu);
app.get('/addpines', addpines.addMenu);
app.get('/addroots', addroots.addMenu);
app.get('/addbistro', addbistro.addMenu);
app.get('/addcafev', addcafev.addMenu);
app.get('/addclubmed', addclubmed.addMenu);
app.get('/addfoodworx', addfoodworx.addMenu);
app.get('/addgoodys', addgoodys.addMenu);
app.get('/addovt', addovt.addMenu);
app.get('/addsixtyfourdegrees', addsixtyfourdegrees.addMenu);
app.get('/addmarket', addmarket.addMenu);

app.get('/canyonvista', canyonvista.view);
app.get('/pines', pines.view);
app.get('/roots', roots.view);
app.get('/bistro', bistro.view);
app.get('/cafev', cafev.view);
app.get('/clubmed', clubmed.view);
app.get('/foodworx', foodworx.view);
app.get('/goodys', goodys.view);
app.get('/ovt', ovt.view);
app.get('/sixtyfourdegrees', sixtyfourdegrees.view);
app.get('/market', market.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
