var compatibilityImageSlot = ["pci_slot.webp", "ram_slot.jpg"];
var compatibilityImageComponent = ["pci_cartes graphiques.webp", "ram_ram.jpg"];

var reponse = false, score = 0, round = 0, isReply = false;

document.getElementsByClassName("game_next")[0].onclick = function(e){
	document.getElementsByClassName("game_next")[0].style.visibility = "hidden";
	if(round >= 10){
		finish();
	}else{
		init();
	}
}

function init(){
	var btn = document.getElementsByClassName("game_choice");

	document.getElementsByClassName("game_explication")[0].innerHTML = "";
	document.getElementsByClassName("game_response")[0].innerHTML = "";

	btn[0].style.backgroundColor = "white";
	btn[1].style.backgroundColor = "white";

	isReply = false;

	document.getElementsByClassName("game_start")[0].style.display = "none";
	document.getElementsByClassName("game_block")[0].style.display = "block";

	getCompatibility();
}

function finish(){
	document.getElementsByClassName("game_explication")[0].innerHTML = "";
	document.getElementsByClassName("game_response")[0].innerHTML = "";

	document.getElementsByClassName("game_start")[0].style.display = "inline-block";
	document.getElementsByClassName("game_block")[0].style.display = "none";
}

document.getElementsByClassName("game_choice")[0].onclick = function(e){
	if(!isReply){
		compatibilityVerification(true);
	}
}

document.getElementsByClassName("game_choice")[1].onclick = function(e){
	if(!isReply){
		compatibilityVerification(false);
	}
}

function getCompatibility(){
	document.getElementsByClassName("game_score")[0].innerHTML = "Votre score: " + score;
	document.getElementsByClassName("game_round")[0].innerHTML = "Tours: " + round + "/10";

	var path = "./images_quiz/compatibility/"

	var image_left = document.getElementsByClassName("game_img_left")[0];
	var left_number = getImage(compatibilityImageSlot);
	image_left.src = path + compatibilityImageSlot[left_number];
	image_left.alt = compatibilityImageSlot[left_number];

	var image_right = document.getElementsByClassName("game_img_right")[0];
	var right_number = getImage(compatibilityImageComponent);
	image_right.src = path + compatibilityImageComponent[right_number];
	image_right.alt = compatibilityImageComponent[right_number];

	//-----------------------------------\\

	var image_name_left = compatibilityImageSlot[left_number].split('.')[0].split('_');
	var image_name_right = compatibilityImageComponent[right_number].split('.')[0].split('_');

	if(image_name_left[0] == image_name_right[0]){
		reponse = true;
	}else{
		reponse = false;
	}
}

function compatibilityVerification(user){
	isReply = true;

	document.getElementsByClassName("game_response")[0].innerHTML = "Vous avez répondu: " + getText(user);

	if(user == reponse){
		score++;
		if(user){
			document.getElementsByClassName("game_choice")[0].style.backgroundColor = "green";	
		}else{
			document.getElementsByClassName("game_choice")[1].style.backgroundColor = "green";
		}
	}else{
		if(user){
			document.getElementsByClassName("game_choice")[0].style.backgroundColor = "red";	
		}else{
			document.getElementsByClassName("game_choice")[1].style.backgroundColor = "red";
		}
	}

	round++;

	document.getElementsByClassName("game_next")[0].style.visibility = "visible";

	var image_name_left = document.getElementsByClassName("game_img_left")[0].alt.split('.')[0].split('_');
	var image_name_right = document.getElementsByClassName("game_img_right")[0].alt.split('.')[0].split('_');

	document.getElementsByClassName("game_explication")[0].innerHTML = "La réponse était " + getText(reponse) + " car les emplacements " + image_name_left[0] + " ne sont pas celle des " + image_name_right[1];
}

function getText(bool){
	if(bool){
		return "OUI";
	}else{
		return "NON";
	}
}

function getImage(list){
	var image = Math.floor(Math.random() * list.length);
	return image;
}

document.getElementsByClassName("game_start")[0].onclick = function(e){
	init();
}
