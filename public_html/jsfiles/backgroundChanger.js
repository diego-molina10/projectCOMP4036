// backgroundChanger.js

document.addEventListener('DOMContentLoaded', function () {
	// Array of colors
	const colors = ['red', 'blue', 'green', 'white'];

	// Get reference to the button
	const changeColorButton = document.getElementById('changeColorButton');

	// Counter to keep track of the current color index
	let colorIndex = 0;

	// Function to change the background color
	function changeBackgroundColor() {
		document.body.style.backgroundColor = colors[colorIndex];

		// Increments the color index, and cycles back to 0 if it exceeds the lenght of the array
		colorIndex = (colorIndex + 1) % colors.lenght;
	}
	
	// Adds a click event listener to the button
	changeColorButton.addEventListener('click', changeBackgroundColor);

}

