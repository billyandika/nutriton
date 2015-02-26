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

    $('.post a').click(function(e) {
      e.preventDefault();

      var postID = $(this).closest('.post').attr('id');
      var idNumber = postID.substr('post'.length);
      var url_call = '/index/post/'+idNumber;

      function addProjectDetails(project_json) {

        // compose the HTML
        var new_html =
          '<br/> <button class="post-delete btn btn-default" type="button">Delete Post</button>';

        // get the DIV to add content to
        var details_div = $('#post' + idNumber + ' .details');
        // add the content to the DIV
        details_div.html(new_html);

        details_div.find('.post-delete').click(function(e) {
          $.post('/index/post/'+idNumber+'/delete', function() {
            window.location.href = '/index';
          });
        });
      }

      // issue the GET request
      $.get(url_call, addProjectDetails);
    });

    $('#newPostSubmitButton').click(function(e) {
      console.log('clicked');
      var title = $('#new-post-form #title').val();
      var content = $('#new-post-form #content').val();
      var json = {
        'post_title': title,
        'content': content,
        'upvotes': 0,
        'downvotes': 0
      };
      $.post('/index/post/new', json, function() {
        window.location.href = '/index'; // reload the page
      });
    });

    $(".comments-toggle").click(function(){
      console.log("clicked on comments");
      if($(this).css("background-color") == "rgb(255, 255, 255)") {
        $(this).css("background-color", "rgb(233, 241, 208)");
        $(this).parent().parent().next().toggle();
      }
      else {
        $(this).css("background-color", "rgb(255, 255, 255)");
        $(this).parent().parent().next().toggle();  
      }
    });
  }
  
function fillStar(e) {
    e.preventDefault();
    
    //check the child class of the button element to see if child has
    //class glyphicon-star or glyphicon-star-empty, changing to other if true
    if($(this).children().hasClass("glyphicon-star")) {
        console.log("star is now unfavorited");
        $(this).html('<span class=\"glyphicon glyphicon-star-empty\"><span>');
    }
    else if($(this).children().hasClass("glyphicon-star-empty")) {
        console.log("star is now favorited");
        $(this).html('<span class=\"glyphicon glyphicon-star\"></span>');
    }
}

function increaseVote(e) {
    e.preventDefault();
    
    //colors used, like and dislike: rgb(135, 184, 34) rgb(235, 138, 131)
    if($(this).css("color") == "rgb(51, 51, 51)") {
        if(($(this).next().children().hasClass("glyphicon-thumbs-down")) && 
           ($(this).next().css("color") == "rgb(255, 255, 255)")) {

            //change back default button color
            $(this).next().css("background-color", "rgb(255, 255, 255)");
            $(this).next().css("color", "rgb(51, 51, 51)");

            var voteCount = parseInt($(this).next().text());
            //decrement other button
            $(this).next().html('<span class=\"glyphicon glyphicon-thumbs-down\"></span> ' + (voteCount-1));
      }
      //change current button
      $(this).css("color", "rgb(255, 255, 255)");
      $(this).css("background-color", "rgb(135, 184, 34)");
    
      var voteupCount = parseInt($(this).text());

      $(this).html('<span class=\"glyphicon glyphicon-thumbs-up\"></span> ' + (voteupCount+1));
    }
    else {
      //change button back
      $(this).css("background-color", "rgb(255, 255, 255)");
      $(this).css("color", "rgb(51, 51, 51)");

      var voteBackCount = parseInt($(this).text());
      //decrement this button
      $(this).html('<span class=\"glyphicon glyphicon-thumbs-up\"></span> ' + (voteBackCount-1));
    }
    
}

function decreaseVote(e) {
  e.preventDefault();

  if($(this).css("color") == "rgb(51, 51, 51)") {
        //check if other button has been selected already
        if(($(this).prev().children().hasClass("glyphicon-thumbs-up")) && 
           ($(this).prev().css("color") == "rgb(255, 255, 255)")) {

            //change back default button color
            $(this).prev().css("background-color", "rgb(255, 255, 255)");
            $(this).prev().css("color", "rgb(51, 51, 51)");

            var voteCount = parseInt($(this).prev().text());
            //decrement other button
            $(this).prev().html('<span class=\"glyphicon glyphicon-thumbs-up\"></span> ' + (voteCount-1));
      }
      //change current button
      $(this).css("color", "rgb(255, 255, 255)");
      $(this).css("background-color", "rgb(235, 138, 131)");
      
      var votedownCount = parseInt($(this).text());

      $(this).html('<span class=\"glyphicon glyphicon-thumbs-down\"></span> ' + (votedownCount+1));
    }
    else {
      //change button back
      $(this).css("background-color", "rgb(255, 255, 255)");
      $(this).css("color", "rgb(51, 51, 51)");

      var voteBackCount = parseInt($(this).text());
      //decrement this button
      $(this).html('<span class=\"glyphicon glyphicon-thumbs-down\"></span> ' + (voteBackCount-1));
    }
  
}

