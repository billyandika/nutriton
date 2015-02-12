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

}

var clicked = false;

function increaseVote(e) {
	console.log("clicked on upvote");

    // prevent the page from reloading
    e.preventDefault();
    
    if(clicked==false) {
    var voteCount = parseInt($(this).text());

    console.log((voteCount+1));
    $(this).html('<span class=\"glyphicon glyphicon-thumbs-up\"></span> ' + (voteCount+1));
    clicked = true;
  }
}
