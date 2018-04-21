var numSquares = 6;
var colors = [];

var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var displayMessage = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//Set up mode buttons
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add event listeners to squares
		squares[i].addEventListener("click",function(){
		   // grab color of picked square
			var clickedColor = this.style.backgroundColor;
			//compare to picked color
			if(clickedColor === pickedColor){
				displayMessage.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				h1.style.backgroundColor = clickedColor;
				changeColors(clickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				displayMessage.textContent = "Try Again!";
			}
		});
	}
}
function reset(){
	//Add new colors
	colors = generateRandomColors(numSquares);
	//Pick new color from array
	pickedColor = pickColor();
	//Change colorDisplay to picked color
	colorDisplay.textContent = pickedColor;
	//Change colors of the squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	resetButton.textContent = "New Colors";
	displayMessage.textContent = "";
	h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click",function(){
	reset();
});


function changeColors(color){
	//Loop through all squares
	for(var i = 0; i < squares.length; i++){
		//Change colors to match the given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//Generate random color and push to arr
		arr.push(randomColors());
	}
	//return the array
	return arr;
}

function randomColors(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

