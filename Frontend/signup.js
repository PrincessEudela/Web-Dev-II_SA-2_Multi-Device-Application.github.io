document.getElementById('signup-btn').addEventListener('click', async () => {
const name = document.getElementById('signup-name').value.trim();
const email = document.getElementById('signup-email').value.trim();
const password = document.getElementById('signup-password').value.trim();
const error = document.getElementById('signup-error');

    if (name && email && password) {
        try {
            const response = await fetch('http://localhost:4000/api/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Succesfully Signed up');
                error.style.display = 'none';
                document.getElementById('signup').classList.add('hidden');
                document.getElementById('login').classList.remove('hidden');
            } else {
                error.textContent = data.message || 'Sign Up Failed!';
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