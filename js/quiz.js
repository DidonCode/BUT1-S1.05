var compatibilityImage = ["pci_component.webp", "pci_slot.webp", "ram_component.jpg", "ram_slot.jpg"];

var modeBuf = -1;
var reponse = false;

game_select_mode.onchange = function(e){
	console.log("change " + e.target.value);
	var content = document.getElementsByClassName("game_content")[0];
	var btn = document.getElementsByClassName("game_choice");

	if(e.target.value == 0){
		document.getElementsByClassName("game_title")[0].innerHTML = "Compatibilité";
		content.style.display = "block";
		btn[0].innerHTML = "OUI";
		btn[1].innerHTML = "NON";
		modeBuf = 0;

		getCompatibility();
	}
	else if(e.target.value == 1){
		document.getElementsByClassName("game_title")[0].innerHTML = "Estimation";
		content.style.display = "block";
		btn[0].innerHTML = "GAUCHE";
		btn[1].innerHTML = "DROITE";
		modeBuf = 1;
	}
	else{
		content.style.display = "none";
	}
}

document.getElementsByClassName("game_choice")[0].onclick = function(e){
	console.log("button click " + e.target.innerHTML);
	if(modeBuf == 0){
		compatibilityVerification(true);
	}
}

document.getElementsByClassName("game_choice")[1].onclick = function(e){
	console.log("button click " + e.target.innerHTML);
	if(modeBuf == 0){
		compatibilityVerification(false);
	}
}

function getCompatibility(){
	var path = "./images_quiz/compatibility/"

	var image_left = document.getElementsByClassName("game_img_left")[0];
	var left_number = getImage(modeBuf);
	image_left.src = path + compatibilityImage[left_number];

	var image_right = document.getElementsByClassName("game_img_right")[0];
	var right_number = getImage(modeBuf);
	image_right.src = path + compatibilityImage[right_number];


	
	while(image_left.src == image_right.src){
		right_number = getImage(modeBuf);
		image_right.src = path + compatibilityImage[right_number];
	}

	var image_name_left = compatibilityImage[left_number].split('.')[0].split('_');
	var image_name_right = compatibilityImage[right_number].split('.')[0].split('_');

	if(image_name_left[0] && image_name_right[0] && ((image_name_left[1] == "component" && image_name_right[1] == "slot") || (image_name_right[1] == "component" && image_name_left[1] == "slot"))){
		reponse = true;
	}else{
		reponse = false;
	}
}

function compatibilityVerification(user){
	console.log("oui");

	document.getElementsByClassName("game_response")[0].innerHTML = "Vous avez répondu: " + user;

	if(user == reponse){

	}else{

	}

	document.getElementsByClassName("game_explication")[0].innerHTML = "La réponse était " + reponse + " car les slots ";
}

function getEstimation(){

}

function getImage(mode){
	if(mode == 0){
		var image = Math.floor(Math.random() * compatibilityImage.length);
	}
	else{

	}

	return image;
}