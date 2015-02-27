exports.view = function(req, res){
  var random_num = Math.random();

  if(random_num > 0.5){
    res.render("foodfinder");
  }else{
    res.render("foodfinderalternative");
  }
};