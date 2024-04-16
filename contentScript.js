// contentScript.js

// Function to open a new tab with the logout message
function openLogoutTab() {
    const logoutMessage = encodeURIComponent("Please log out");
    const logoutUrl = `https://www.roblox.com?message=${logoutMessage}`;
    window.open(logoutUrl, '_blank');
}

// Function to create the message with the green checkmark
function createMessage() {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = 'Thank you for logging out';
    messageDiv.style.position = 'fixed';
    messageDiv.style.bottom = '10px';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translateX(-50%)';
    messageDiv.style.background = '#2ecc71'; // Green background color
    messageDiv.style.color = '#fff'; // White text color
    messageDiv.style.padding = '10px';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.cursor = 'pointer';
    messageDiv.onclick = () => {
        messageDiv.remove();
    };

    const checkmarkIcon = document.createElement('span');
    checkmarkIcon.textContent = '✓';
    checkmarkIcon.style.marginRight = '5px';

    messageDiv.prepend(checkmarkIcon);
    document.body.appendChild(messageDiv);
}

// Create a div element for the bot followers UI
const botFollowersUI = document.createElement('div');
botFollowersUI.id = 'botFollowersUI';
botFollowersUI.style.position = 'fixed';
botFollowersUI.style.bottom = '10px';
botFollowersUI.style.left = '10px';
botFollowersUI.style.background = '#2c2f33'; // Dark background color
botFollowersUI.style.padding = '10px';
botFollowersUI.style.border = '1px solid #fff'; // White border
botFollowersUI.style.zIndex = '9999';

// Create input field for amount
const inputField = document.createElement('input');
inputField.type = 'number';
inputField.id = 'followerAmount';
inputField.placeholder = 'Enter amount';
inputField.style.background = '#40444b'; // Dark input field background
inputField.style.color = '#fff'; // White text color
inputField.style.border = '1px solid #fff'; // White border
botFollowersUI.appendChild(inputField);

// Create button to initiate botting
const botButton = document.createElement('button');
botButton.innerText = 'Bot Followers';
botButton.style.background = '#7289da'; // Discord blue color
botButton.style.color = '#fff'; // White text color
botButton.style.border = 'none';
botButton.style.padding = '5px 10px';
botButton.style.marginLeft = '10px'; // Add margin for spacing
botButton.onclick = () => {
    const amount = parseInt(inputField.value);
    const username = getUsername(); // Get the username
    if (!isNaN(amount) && username) {
        alert(`Botting ${amount} followers for ${username}!`);
        openLogoutTab(); // Open new tab with logout message
        createMessage(); // Display thank you message with checkmark
    } else {
        alert('Please enter a valid number or ensure the username element exists!');
    }
};
botFollowersUI.appendChild(botButton);

// Append the UI to the document body
document.body.appendChild(botFollowersUI);
