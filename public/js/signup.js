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

    // function generatePassword(length) {
    //     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    //     let password = "";
    //     for (let i = 0; i < length; i++) {
    //       password += charset.charAt(Math.floor(Math.random() * charset.length));
    //     }
    //     return password;
    //   }
    };
    
    document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);