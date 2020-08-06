// Chalenge 1: Your Age in days

function AgeInDays() {
	var birthYear = prompt('What year were you born?');
	var finalanswer =(2020 - birthYear) * 365;
	var h1 = document.createElement('h1');
	var textanswer = document.createTextNode('You are' + finalanswer + 'days');
	h1.setAttribute('id','AgeInDays');
	h1.appendChild(textanswer);
	document.getElementById('flex-box-Result').appendChild(h1)

}
function Reset(){
	document.getElementById('AgeInDays').remove();
}

// Challenge 2: Cat Generator

function GenerateCat(){
	var image = document.createElement("img");
	var div = document.getElementById('flex-cat-gen');
	image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
	div.appendChild(image);
}
