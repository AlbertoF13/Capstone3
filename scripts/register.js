const form = document.querySelector('.forms');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');



form.addEventListner('submit', (event) => {
    event.preventDefault();

    ValidateForm();
})
