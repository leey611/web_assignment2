	
	//var myLine = document.getElementById("line"); 
	var  myLine = document.getElementById("line");
	for (var i = 0; i < 280; i++) {
			
			//  (i/380) will always be a percent
			// so anything times (i/380) * 255

		// the for loop runs 50 times, so it adds the div below 50 times
		// the string below contains a div, which is added (+=) to our wrapper with each for loop cycle. 
		// within our string, we are using the variable "i" to generate numbers that output inline css values
		myLine.innerHTML += '<div class="patternUnit" style="background-color: rgb('+ (255 - (i/280)*255) +',0,'+ (i/280)*255 +'); transform: rotate('+ (90 + (10*i)) +'deg);"></div>';
		//myTri.innerHTML += '<div class="triangle-right" style="background-color: rgb('+ (255 - (i/20)*255) +',0,'+ (i/20)*255 +');"></div>';
	}


