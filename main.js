// globals
var pages = ["KamLAND-Zen", "THEIA", "CMS-NIM+", "AboutMe", "CV"]

$(document).ready(function(){
	$('.ui.dropdown').dropdown();
});

function hideifshown(elementId){
	var element = document.getElementById(elementId);
	if (element.style.display === "block") {
		element.style.display = "none";
	}
}

// Show Div for selected content
function showcontent(elementId){ 
	// Hide currently shown elements
	for (i=0; i < pages.length; i++){
		hideifshown(pages[i]);
	}
	// Show chosen element
	var element = document.getElementById(elementId);
	element.style.display = "block";
}