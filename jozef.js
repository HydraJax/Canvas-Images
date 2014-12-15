function doFirst(){
	var x = document.getElementById('canvas');
	// declare a 2d drawing surface
	canvas = x.getContext('2d');
	// drawing paths where to start

	canvas.beginPath();
	// over 50px and down 50px to start
	canvas.moveTo(50,50);
	// then move to 70, 250x
	canvas.lineTo(70,250);
	// then to 300,200
	canvas.lineTo(300,200);
	// now we want to close the path and say we are done
	canvas.closePath();
	// next we want to say is this a color fill or a stroke
	canvas.stroke();

	// we should get a nice triabgle
}

window.addEventListener("load", doFirst, false);