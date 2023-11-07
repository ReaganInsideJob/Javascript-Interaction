let heading = document.getElementByID("title");
let executeButton = document.getElementByID("executeButton");
let outputParagraph= document.getElementByID("outputText");
let inputElement = document.getElementByID("myInput");

let times = ["too sad", "gonna be drainy", "not happy", "anything but blissful"]


executeButton.addEventListener("click", function(){
	var currentInputText= inputElement.value;
	generate(currentInputText);
	restyle();
});

function demonstrsationFunction(){
	console.log("Called function...");
	var randomRed= Math.random() * 255;
	var randomGreen= Math.random() * 255;
	var randomBlue= Math.random() * 255;
	console.log(randomRed);
	console.log(randomGreen);
	console.log(randomBlue);


	let outputColorString = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")";
	console.log(outputColorString);

	var currentInputText= inputElement.value;


	heading.style.color = outputColorString;
	heading.style.fontSize= "5rem";
	heading.style.textShadow= "0px 0px 10px #fff";
	let randRot= -20 + (Math random() * 40);
	console.log(randRot);
	heading.style.transform= "rotate("+ randRot +")";


	console.log("Class list BEFORE:")
	console.log(heading.classList);

	heading.classList.toggle("specialTitle");
	console.log("Class list AFTER:");

	outputParagraph.innerHTML = "Some new text...";
	var currentInputText = inputElement.value;
	var currentInputAsNumber = parseFloat(currentInputText);


}

function generate(incUserInput){
	let randomIndex = Math.floor(Math.random() * times.length);
	let selectedRandomTimeText = times[randomIndex];
	outputParagraph.innerText= "You said" + incUserInput + "but it would be" + selectedRandomTimeText
}

function restyle() {
	let randR = Math.random() * 255;
	let randG = Math.random() * 255;
	let randB = Math.random() * 255;
	let randOutputColor= "rgb("+randR+","+randG+","+randB+")";
	outputParagraph.style.backgroundColor = randOutputColor;
}







