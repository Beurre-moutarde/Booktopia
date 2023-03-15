const loginHandler = async (event) => {
  event.preventDefault();
  document.location.assign('/login');
};

const signupHandler = async (event) => {
event.preventDefault();
document.location.assign('/signup');
};



document.querySelector('.login-button').addEventListener('click', loginHandler);

document.querySelector('.signup-button').addEventListener('click', signupHandler);