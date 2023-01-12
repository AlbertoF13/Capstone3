const form = document.querySelector('.forms');


const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');



form.addEventListner('submit', (event) => {
    event.preventDefault();
 // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    const formData = new FormData(this);
    
    ValidateForm();
    // Have the form Validate Users account info 
})
