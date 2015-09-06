function changeImage() {
	var image = document.getElementById('myImage');
	if (image.src.match("bulb_on")){
		image.src = "images/bulb_off.jpg";
	}
	else{
		image.src="images/bulb_on.png"
	}
}

function changeCSS(){
	var css= document.getElementById('header').style.fontSize = '50px';
}