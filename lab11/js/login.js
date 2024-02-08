const login = document.getElementById('login-form');

function handleLogin(e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username !== 'admin' || password !== '123') {
        e.preventDefault();
        document.getElementById('login-message').innerText = 'Not registered.';
    }
}

login.addEventListener('submit', handleLogin);