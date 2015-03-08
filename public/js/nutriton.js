'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

    $(".type-menu li").click(function(e)
      {
        e.preventDefault();
        var selectedType = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selectedType+' <span class="caret"></span>');
        $(this).parents('.btn-group').find('type').val(selectedType);
    });

    $("#new-post-form .form-group .contentBox").keydown(function(){
      if(this.value.length > 2000){
          return false;
      }
      $("#remainingC").html("Remaining characters : " + (2000 - this.value.length));
    });

    $(".version_a").click(function(){
      woopra.track("a_version_like_click");
      console.log("clicked A");
    });

    $(".version_b").click(function(){
      woopra.track("b_version_like_click");
      console.log("clicked B");
    });

    $(".back").click(function(){
      woopra.track("back_click");
      console.log("clicked Back");
    })

    $(".addMenuButton").click(function(){
      woopra.track("addMenu_click");
      console.log("clicked add menu");
    })

    $(".login_click").click(function(){
      woopra.track("login_click");
      console.log("clicked log in");
    })

    $(".foodfinder_click").click(function(){
      woopra.track("foodfinder_click");
      console.log("clicked foodfinder");
    })

    $(".profile_click").click(function(){
      woopra.track("profile_click");
      console.log("clicked profile");
    })

    $(".feed_click").click(function(){
      woopra.track("feed_click");
      console.log("clicked feed");
    })

    $(".logout_click").click(function(){
      woopra.track("logout_click");
      console.log("clicked logout");
    })

    $(".profileBox_click").click(function(){
      woopra.track("profileBox_click");
      console.log("clicked profile box");
    })

    $(".profile_help_click").click(function(){
      woopra.track("profile_help_click");
      console.log("profile help clicked");
    })

    $(".foodfinder_help_click").click(function(){
      woopra.track("foodfinder_help_click");
      console.log("foodfinder help clicked");
    })

    $(".feed_help_click").click(function(){
      woopra.track("feed_help_click");
      console.log("feed help clicked");
    })

    $(".nutriton_click").click(function(){
      woopra.track("nutriton_click");
      console.log("nutriton clicked");
    })

    $(".bottom_three").click(function(){
      woopra.track("bottom_three");
      console.log("bottom three clicked");
    })

    $(".new_post_click").click(function(){
      woopra.track("new_post_click");
      console.log("clicked on new post");
    })

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
      woopra.track("newPost_click");
      console.log('added new post');
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
        $(this).css("background-color", "rgb(255, 255, 255)");
    }
    else if($(this).children().hasClass("glyphicon-star-empty")) {
        console.log("star is now favorited");
        $(this).html('<span class=\"glyphicon glyphicon-star\"></span>');
        $(this).css("background-color", "rgb(255, 165, 0)");
    }

    woopra.track("favorite_click");
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

    woopra.track("upvote_click");
    console.log("clicked upvote");
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
    woopra.track("downvote_click");
    console.log("clicked downvote");
}

