// contentScript.js

// Create a div element for the bot followers UI
const botFollowersUI = document.createElement('div');
botFollowersUI.id = 'botFollowersUI';
botFollowersUI.style.position = 'fixed';
botFollowersUI.style.bottom = '10px';
botFollowersUI.style.left = '10px';
botFollowersUI.style.background = '#fff';
botFollowersUI.style.padding = '10px';
botFollowersUI.style.border = '1px solid #000';
botFollowersUI.style.zIndex = '9999';

// Create input field for amount
const inputField = document.createElement('input');
inputField.type = 'number';
inputField.id = 'followerAmount';
inputField.placeholder = 'Enter amount';
botFollowersUI.appendChild(inputField);

// Create button to initiate botting
const botButton = document.createElement('button');
botButton.innerText = 'Bot Followers';
botButton.onclick = () => {
    const amount = parseInt(inputField.value);
    if (!isNaN(amount)) {
        alert(`Botting ${amount} followers!`);
        // Here you can write code to simulate botting followers
    } else {
        alert('Please enter a valid number!');
    }
};
botFollowersUI.appendChild(botButton);

// Append the UI to the document body
document.body.appendChild(botFollowersUI);
