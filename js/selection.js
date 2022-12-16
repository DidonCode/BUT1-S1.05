var imgX, imgY, repeater;

selection.mouseover = function(e) {
	repeater = setInterval(getImage(e), 1);
}

selection.onmouseout = function(e) {
	clearInterval(repeater);
}

function getImage(e){
	var ratioX = e.target.naturalWidth / e.target.offsetWidth;
	var ratioY = e.target.naturalHeight / e.target.offsetHeight;

	var domX = e.x + window.pageXOffset - e.target.offsetLeft;
	var domY = e.y + window.pageYOffset - e.target.offsetTop;

	imgX = Math.floor(domX * ratioX);
	imgY = Math.floor(domY * ratioY);

	console.log(imgX, imgY);

	openPage(imgX, imgY);
}

function openPage(imgX, imgY){
	if(imgX >= 31 && imgX <= 76 && imgY >= 8 && imgY <= 28){
		document.body.style.cursor = "pointer";
	}else{
		document.body.style.cursor = "auto";
	}
}