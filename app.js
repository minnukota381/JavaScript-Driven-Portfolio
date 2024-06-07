// Get the app div
const app = document.getElementById('app');

// Create and append the title
const title = document.createElement('h1');
title.textContent = 'Login';
app.appendChild(title);

// Create and append the email input field
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.placeholder = 'Enter your email';
app.appendChild(emailInput);

// Create and append the password input field
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.id = 'password';
passwordInput.placeholder = 'Enter your password';
app.appendChild(passwordInput);

// Create and append the login button
const loginButton = document.createElement('button');
loginButton.id = 'login-button';
loginButton.textContent = 'Login';
app.appendChild(loginButton);

// Add event listener to the login button
loginButton.addEventListener('click', function() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (email === '') {
        alert('Please enter your email');
    } else if (password === '') {
        alert('Please enter your password');
    } else {
        alert('Logged in successfully!');
        // Here you can add more complex login logic
    }
});
