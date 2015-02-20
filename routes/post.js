var models = require('../models');

exports.postInfo = function(req, res) { 
  var postID = req.params.id;

  // query for the specific project and
  // call the following callback

  models.Post.find({"_id" : postID}).exec(afterQuery);

  function afterQuery(err, projects) {
    console.log("test1");
    if(err) console.log(err);
    res.json(post[0]);
  }
}

exports.addPost = function(req, res) {
  var form_data = req.body;
  console.log(form_data);
      console.log("test2");


  var newPost = new models.Post({
    "title": form_data.post_title,
    "content": form_data.content,
  });
  newPost.save(afterSaving);

  function afterSaving(err) {
        console.log("test3");

    if(err) {console.log(err); res.send(500); }
    res.send();
  }

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
}

// exports.deleteProject = function(req, res) {
//   var projectID = req.params.id;

//   models.Project.find({"_id" : projectID}).remove().exec(deleteCallback);

//   function deleteCallback(err, projects) {
//     if(err) { console.log(err); res.send(500);}
//     res.send();
//   }


//   // find the project and remove it
//   // YOU MUST send an OK response w/ res.send();
// }