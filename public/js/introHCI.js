'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");


		// var containingProject = $(this).closest("#testjs");
		// var description = $(containingProject).find(".testjs-description");
		// if (description.length == 0) { 
  //      $(containingProject).append("<div class='testjs-description'><p>Javascript is connected</p></div>"); 
  //   	} else { 
  //      description.html("<p>Experience Chan! It's not a lot of questions.Too many questions is the Chan disease.The best way is just to observe the noise of the world.The answer to your questions? Ask your own heart.</p>");
  //   	}
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);

}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}

function projectClick(e) { 
	console.log("Project clicked");

    // prevent the page from reloading 
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
    // $(this).css("background-color", "#7fff00");

    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       $(containingProject).fadeOut();
    }
}