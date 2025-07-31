const profilePic = document.getElementById('profilePic');
const profileUpload = document.getElementById('profileUpload');
const chatInput = document.getElementById('chatInput');
const chatButton = document.getElementById('chatButton');
const chatContainer = document.getElementById('chatContainer');
const chatDisplay = document.getElementById('chatDisplay');
const sendButton = document.getElementById('sendButton');
const chatInputField = document.getElementById('chatInputField');
// Function to enable or disable buttons based on input
function toggleButton(inputField, button) {
    button.disabled = inputField.value.trim() === '';
}
// Handle profile picture upload
profileUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
            profilePic.src = evt.target.result;
            localStorage.setItem('profilePicSrc', evt.target.result);
        };
        reader.readAsDataURL(file);
    }
});
// Load profile picture from localStorage
window.addEventListener('DOMContentLoaded', function() {
    const savedSrc = localStorage.getItem('profilePicSrc');
    if (savedSrc) {
        profilePic.src = savedSrc;
    }
});
// Handle chat input
chatInput.addEventListener('input', function() {
    toggleButton(chatInput, chatButton);
});
// Handle chat button click
chatButton.addEventListener('click', function() {
    const message = chatInput.value.trim();
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        messageElement.textContent = message;
        chatContainer.appendChild(messageElement);
        chatInput.value = '';
        chatButton.disabled = true;
    }
});
// Handle chat message removal
chatContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('chat-message')) {
        e.target.remove();
    }
});
// Handle chat form submission
const chatForm = document.getElementById('chatForm');
chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle form submission logic here
});
// Handle input for send button
const chatInputFields = [chatInputField, chatInput]; // Add more input fields here if necessary
chatInputFields.forEach(inputField => {
    inputField.addEventListener('input', function() {
        toggleButton(inputField, sendButton);
    });
});
// Handle send button click
sendButton.addEventListener('click', function() {
    const message = chatInputField.value.trim();
    if (message) {
        const newMessage = document.createElement('div');
        newMessage.className = 'chat-message';
        newMessage.textContent = message;
        chatDisplay.appendChild(newMessage);
        chatInputField.value = '';
        sendButton.disabled = true;
    }
});
// Handle chat display click for removing messages
chatDisplay.addEventListener('click', function(e) {
    if (e.target.classList.contains('chat-message')) {
        e.target.remove();
    }
});
// Handle chat input field for enabling/disabling send button
chatInputField.addEventListener('input', function() {
    toggleButton(chatInputField, sendButton);
});
// Handle chat input field for enabling/disabling chat button
chatInput.addEventListener('input', function() {
    toggleButton(chatInput, chatButton);
});
// Handle chat button click for sending messages
chatButton.addEventListener('click', function() {   
    const message = chatInput.value.trim();
    if (message) {
        const newMessage = document.createElement('div');
        newMessage.className = 'chat-message';
        newMessage.textContent = message;
        chatDisplay.appendChild(newMessage);
        chatInput.value = '';
        chatButton.disabled = true;
    }
});
// Handle chat display click for removing messages
chatDisplay.addEventListener('click', function(e) {
    if (e.target.classList.contains('chat-message')) {
        e.target.remove();
    }
});
// Handle chat input field for enabling/disabling send button
chatInputField.addEventListener('input', function() {
    toggleButton(chatInputField, sendButton);
});
// Handle chat input field for enabling/disabling chat button   
chatInput.addEventListener('input', function() {
    toggleButton(chatInput, chatButton);
});
// Handle chat button click for sending messages
chatButton.addEventListener('click', function() {
    const message = chatInput.value.trim();
    if (message) {
        const newMessage = document.createElement('div');
        newMessage.className = 'chat-message';
        newMessage.textContent = message;
        chatDisplay.appendChild(newMessage);
        chatInput.value = '';
        chatButton.disabled = true;
    }
});
// Handle chat display click for removing messages
chatDisplay.addEventListener('click', function(e) { 
    if (e.target.classList.contains('chat-message')) {
        e.target.remove();
    }
});
// Handle chat input field for enabling/disabling send button
chatInputField.addEventListener('input', function() {
    toggleButton(chatInputField, sendButton);
});
// Handle chat input field for enabling/disabling chat button
chatInput.addEventListener('input', function() {
    toggleButton(chatInput, chatButton);
});
// Handle chat button click for sending messages
chatButton.addEventListener('click', function() {
    const message = chatInput.value.trim();
    if (message) {
        const newMessage = document.createElement('div');
        newMessage.className = 'chat-message';
        newMessage.textContent = message;
        chatDisplay.appendChild(newMessage);
        chatInput.value = '';
        chatButton.disabled = true;
    }
        const newMessage = document.createElement('div');
        newMessage.className = 'chat-message';
        newMessage.textContent = message;
        chatDisplay.appendChild(newMessage);
        chatInput.value = '';
        chatButton.disabled = true;
    }
);
// Handle chat display click for removing messages
chatDisplay.addEventListener('click', function(e) {
    if (e.target.classList.contains('chat-message')) {
        e.target.remove();
    }
});
// Handle chat input field for enabling/disabling send button
chatInputField.addEventListener('input', function() {
    toggleButton(chatInputField, sendButton);
});
// Handle chat input field for enabling/disabling chat button
chatInput.addEventListener('input', function() {
    toggleButton(chatInput, chatButton);
});
// Handle chat button click for sending messages
chatButton.addEventListener('click', function() {
    const message = chatInput.value.trim();
    if (message) {
        const newMessage = document.createElement('div');
        newMessage.className = 'chat-message';
        newMessage.textContent = message;
        chatDisplay.appendChild(newMessage);
        chatInput.value = '';
        chatButton.disabled = true;
    }
});
// Handle chat display click for removing messages
chatDisplay.addEventListener('click', function(e) {
    if (e.target.classList.contains('chat-message')) {
        e.target.remove();
    }
});
// Handle chat input field for enabling/disabling send button
chatInputField.addEventListener('input', function() {
    toggleButton(chatInputField, sendButton);
});
// Handle chat input field for enabling/disabling chat button
chatInput.addEventListener('input', function() {
    toggleButton(chatInput, chatButton);
});