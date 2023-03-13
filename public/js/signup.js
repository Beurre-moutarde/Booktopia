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

const generatePasswordButton = document.getElementById("generate-password-button");
const passwordInput = document.getElementById("password");

generatePasswordButton.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    const response = await fetch("/api/users/generate-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      passwordInput.value = data.password;
    } else {
      throw new Error("Unable to generate password.");
    }
  } catch (error) {
    console.error(error);
  }
});

const signupForm = document.querySelector(".signup-form");

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const formData = {
    name: fullNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      window.location.href = "/";
    } else {
      throw new Error("Unable to sign up.");
    }
  } catch (error) {
    console.error(error);
  }
});



document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);