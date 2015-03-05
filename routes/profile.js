exports.view = function(req, res){
  var random_num = Math.random();

  if(random_num > 0.5){
    res.render("profile");
  }else{
    res.render("profilealternative");
  }
};