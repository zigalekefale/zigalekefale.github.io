var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 1000;	// Time Between Switch
// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeOut("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
