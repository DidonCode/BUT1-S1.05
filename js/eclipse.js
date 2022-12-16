var oldEclispe = null;

function eclispe(){
	var svg = document.getElementById("eclispe");

	if(oldEclispe != null){
		svg.removeChild(oldEclispe);
	}

	var width = window.innerWidth;
	var height = 150; 

	var marge = 400;

	var newPath = document.createElementNS("http://www.w3.org/2000/svg", 'path');
	newPath.setAttribute("d","M -" + (marge) + " " + height + " S " + ((width + marge * 2) / 2 - marge - 70) + " -190 " + (width + marge) + " " + height);
	newPath.style.stroke = "#242424"
	newPath.style.fill = "#242424"

	oldEclispe = newPath;

	svg.appendChild(newPath);
}

eclispe();