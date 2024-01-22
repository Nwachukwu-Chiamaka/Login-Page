function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const idea = document.getElementById('idea');

    // Simple validation
    if (username === '' || password === '') {
        idea.textContent = 'Username and password are required.';
        return;
    }

    // Simulate password hashing (replace with server-side hashing in a real scenario)
    const hashedPassword = btoa(password);

    // Send the username and hashedPassword to the server for verification

    // For demonstration purposes, display a success message
    idea.textContent = 'Login successful!';
    idea.style.color = '#4caf50';
}