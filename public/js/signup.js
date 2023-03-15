const signupFormHandler = async (event) => {
event.preventDefault();

function generatePassword(length) {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
  

const name = document.querySelector('#fullName').value.trim();
const email = document.querySelector('#email').value.trim();
const password = document.querySelector('#password').value.trim();

if (name && email && password) {
    const response = await fetch('/api/users/', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/profileMatching');
    } else {
        alert(response.statusText);
    }
}
};

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);