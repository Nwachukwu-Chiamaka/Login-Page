function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const idea = document.getElementById('idea');

    // for validation
    if (username === '' || password === '') {
        idea.textContent = 'Username and password are required.';
        return;
    }

    const hashedPassword = secret(password);

    idea.textContent = 'Login successful!';
    idea.style.color = '#4caf50';
}