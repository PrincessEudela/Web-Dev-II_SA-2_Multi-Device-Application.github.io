document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const error = document.getElementById('login-error');

    if (email && password) {
        try {
            const response = await fetch('http://localhost:4000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(`Welcome back, ${data.user.name}!`);
                error.style.display = 'none';
                localStorage.setItem('user', JSON.stringify(data));

                // Redirect to the home page
                document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
                document.getElementById('home').classList.remove('hidden');
            } else {
                error.textContent = data.message || 'Invalid email or password.';
                error.style.display = 'block';
            }
        } catch (err) {
            error.textContent = 'An error occurred. Please try again later.';
        }
    } else {
        error.textContent = 'All fields are required!';
        error.style.display = 'block';
    }
});