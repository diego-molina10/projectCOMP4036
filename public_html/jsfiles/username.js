// username.js

// Get the element to display the user's name
const userNameElement = document.getElementById('userName');

// Displays a message with instructions on how to enter their name
userNameElement.textContent = 'Welcome! Please enter your name in the URL using ?name=YourName';

// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name');

// Check if the 'name' parameter is present
if (userName) {
	// Display the user's name on the screen
	userNameElement.textContent = 'Hello, ${userName}!';
}
