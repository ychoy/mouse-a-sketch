console.log("this is a sanity check");

$(document).ready(function(){
 	$('td').mouseenter(function(){
		$(this).css("background", ($("input").val()));
	});

	// bonus - spacebar to turn off and on drawing
	// second bonus - fix space bar/ color picker problem (hint in rot-13: sbphf / oyhe)
})
