var imgX, imgY;

selection.onmousemove = function(e) {
	getImage(e)
}

function getImage(e){
	var ratioX = e.target.naturalWidth / e.target.offsetWidth;
	var ratioY = e.target.naturalHeight / e.target.offsetHeight;

	var domX = e.x + window.pageXOffset - e.target.offsetLeft;
	var domY = e.y + window.pageYOffset - e.target.offsetTop;

	imgX = Math.floor(domX * ratioX);
	imgY = Math.floor(domY * ratioY);

	openPage(imgX, imgY);
}

function openPage(imgX, imgY){
	var pageName = "";

	if(imgX >= 145 && imgX <= 250 && imgY >= 105 && imgY <= 150){ //Button CPU
		pageName = "cpu";
	}
	else if(imgX >= 1180 && imgX <= 1280 && imgY >= 45 && imgY <= 140){ //Button RAM
		pageName = "ram"
	}
	else if(imgX >= 0 && imgX <= 135 && imgY >= 430 && imgY <= 465){ //Button VIDEO
		pageName = "gpu"
	}
	else if(imgX >= 1295 && imgX <= 1395 && imgY >= 390 && imgY <= 430){ //Button ROM
		pageName = "rom"
	}
	else{
		pageName = "";
	}
	
	if(pageName != ""){
		document.body.style.cursor = "pointer";
		selection.onclick = function(e){
			console.log("oui");
			window.location.href = "components/" + pageName;
		}
	}else{
		document.body.style.cursor = "auto";
	}

}