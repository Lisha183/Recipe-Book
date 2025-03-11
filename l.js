document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const userDisplay = document.getElementById('user-display');
    const displayUsername = document.getElementById('display-username');
    const logoutButton = document.getElementById('logout-button');

    // Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        displayUsername.textContent = loggedInUser.username;
        loginForm.style.display = 'none';
        signupForm.style.display = 'none';
        userDisplay.style.display = 'block';
    }

    // Signup
    document.getElementById('signup-button').addEventListener('click', () => {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        if (localStorage.getItem(username)) {
            alert('Username already exists.');
            return;
        }

        localStorage.setItem(username, password);
        alert('Signup successful!');
    });

    // Login
    document.getElementById('login-button').addEventListener('click', () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (localStorage.getItem(username) === password) {
            localStorage.setItem('loggedInUser', JSON.stringify({ username }));
            displayUsername.textContent = username;
            loginForm.style.display = 'none';
            signupForm.style.display = 'none';
            userDisplay.style.display = 'block';
        } else {
            alert('Invalid username or password.');
        }
    });

    // Logout
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        loginForm.style.display = 'block';
        signupForm.style.display = 'block';
        userDisplay.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const userDisplay = document.getElementById('user-display');
    const displayUsername = document.getElementById('display-username');
    const logoutButton = document.getElementById('logout-button');
    const showSignupButton = document.getElementById('show-signup-button'); // Added

    // Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        displayUsername.textContent = loggedInUser.username;
        loginForm.style.display = 'none';
        signupForm.style.display = 'none';
        userDisplay.style.display = 'block';
    }

    // Signup
    document.getElementById('signup-button').addEventListener('click', () => {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        if (localStorage.getItem(username)) {
            alert('Username already exists.');
            return;
        }

        localStorage.setItem(username, password);
        alert('Signup successful!');
    });

    // Login
    document.getElementById('login-button').addEventListener('click', () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (localStorage.getItem(username) === password) {
            localStorage.setItem('loggedInUser', JSON.stringify({ username }));
            displayUsername.textContent = username;
            loginForm.style.display = 'none';
            signupForm.style.display = 'none';
            userDisplay.style.display = 'block';
        } else {
            alert('Invalid username or password.');
        }
    });

    // Logout
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUser');
        loginForm.style.display = 'block';
        signupForm.style.display = 'none'; // Ensure signup form is hidden
        userDisplay.style.display = 'none';
    });

    // Show Signup Form
    showSignupButton.addEventListener('click', () => {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });
});