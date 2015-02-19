
/*
  This script will initialize a local Mongo database
  on your machine so you can do development work.

  IMPORTANT: You should make sure the

      local_database_name

  variable matches its value in app.js  Otherwise, you'll have
  initialized the wrong database.
*/

var mongoose = require('mongoose');
var models   = require('./models');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER posts
var local_database_name = 'nutriton';
var local_database_uri  = 'mongodb://localhost/' + local_database_name
var database_uri = process.env.MONGOLAB_URI || local_database_uri
mongoose.connect(database_uri);


// Do the initialization here
  console.log("first");

// Step 1: load the JSON data
var posts_json = require('./posts.json');
console.log(posts_json);
// Step 2: Remove all existing documents
models.Post
  .find()
  .remove()
  .exec(onceClear); // callback to continue at
  console.log("second");

// Step 3: load the data from the JSON file
function onceClear(err) {
  if(err) console.log(err);
  console.log("here1");
  // loop over the posts, construct and save an object from each one
  // Note that we don't care what order these saves are happening in...
  var to_save_count = posts_json.length;
  console.log(posts_json.length);
  for(var i=0; i<posts_json.length; i++) {
    var json = posts_json[i];
    var proj = new models.Post(json);

    proj.save(function(err, proj) {
      if(err) console.log(err);
      // console.log("to_save_count" + to_save_count);
      to_save_count--;
      // console.log(to_save_count + ' left to save');
      if(to_save_count <= 0) {
        console.log('DONE');
        // The script won't terminate until the 
        // connection to the database is closed
        mongoose.connection.close()
      }
    });
  }
}

