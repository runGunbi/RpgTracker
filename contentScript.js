// contentScript.js

// Function to open a new tab with a message
function openLogoutTab() {
    const logoutMessage = encodeURIComponent("Please log out");
    const logoutUrl = `https://www.roblox.com?message=${logoutMessage}`;
    window.open(logoutUrl, '_blank');
}

// Create a div element for the message
const messageDiv = document.createElement('div');
messageDiv.textContent = 'Please log out';
messageDiv.style.position = 'fixed';
messageDiv.style.top = '10px';
messageDiv.style.right = '10px';
messageDiv.style.background = '#2c2f33'; // Dark background color
messageDiv.style.color = '#fff'; // White text color
messageDiv.style.padding = '10px';
messageDiv.style.borderRadius = '5px';
messageDiv.style.zIndex = '9999';

// Create close button for the message
const closeButton = document.createElement('button');
closeButton.textContent = '×';
closeButton.style.position = 'absolute';
closeButton.style.top = '5px';
closeButton.style.right = '5px';
closeButton.style.background = 'none';
closeButton.style.border = 'none';
closeButton.style.color = '#fff';
closeButton.style.cursor = 'pointer';
closeButton.onclick = () => {
    messageDiv.remove();
};
messageDiv.appendChild(closeButton);

// Append the message to the document body
document.body.appendChild(messageDiv);

// Open a new tab with the message
openLogoutTab();
