'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
      $(".upvote").click(increaseVote);
      $(".downvote").click(decreaseVote);
      $(".favorite").click(fillStar);
}

function fillStar(e) {
    console.log("clicked on favorite");
    e.preventDefault();
    if ($(this).html() == '<span class=\"glyphicon glyphicon-star\"></span> ') {
      $(this).html('<span class=\"glyphicon glyphicon-star-empty\"><span> ');
    } else if ($(this).html() == '<span class=\"glyphicon glyphicon-star-empty\"><span> ') {
      $(this).html('<span class=\"glyphicon glyphicon-star\"></span> ');
    }
    //$(this).html('<span class=\"glyphicon glyphicon-star\"></span> ').toggle();
    //$(this).html('<span class=\"glyphicon glyphicon-star-empty\"><span> ').toggle();
}

function increaseVote(e) {
    console.log("clicked on upvote");
    // prevent the page from reloading
    e.preventDefault();
    
    var voteupCount = parseInt($(this).text());

    console.log((voteupCount+1));
    $(this).html('<span class=\"glyphicon glyphicon-thumbs-up\"></span> ' + (voteupCount+1));
}

function decreaseVote(e) {
  console.log("clicked on downvote");
  e.preventDefault();

  var votedownCount = parseInt($(this).text());

  console.log((votedownCount+1));
  $(this).html('<span class=\"glyphicon glyphicon-thumbs-down\"></span> ' + (votedownCount+1));
}

