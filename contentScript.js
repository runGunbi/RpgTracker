// contentScript.js

// Function to extract username from the page
function getUsername() {
    const usernameElement = document.querySelector('.age-bracket-label-username.font-caption-header');
    if (usernameElement) {
        return usernameElement.innerText.trim();
    } else {
        return null;
    }
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
        // Here you can write code to simulate botting followers for the specific username
    } else {
        alert('Please enter a valid number or ensure the username element exists!');
    }
};
botFollowersUI.appendChild(botButton);

// Append the UI to the document body
document.body.appendChild(botFollowersUI);
