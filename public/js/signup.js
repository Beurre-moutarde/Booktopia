const signupFormHandler = async (event) => {
event.preventDefault();



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

const generatePasswordButton = document.querySelector('#generate-password-button');
const passwordField = document.querySelector('#password');

generatePasswordButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  // Fetch the generated password from the server
  fetch('/api/users/generate-password')
    .then(response => response.json())
    .then(data => {
      // Update the password input field with the generated password
      passwordField.value = data.password;
    })
    .catch(error => console.error(error));
});


document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);