const form = document.querySelector('.forms2');


//const usernameInput = document.querySelector('#username');
//const emailInput = document.querySelector('#email');
//const passwordInput = document.querySelector('#password');



form.addEventListner('submit', (event) => {
    event.preventDefault();
 // Prevent the form from submmiting 
  
    const formData = new FormData(this);
// getting the form data
    fetch('https://microbloglite.herokuapp.com',{
        method: 'post',
        body: formData

}) .then(function (response) {

    return response.text();

}).then(function(text) {
    
    console.log(text);
}).catch(function(error) {

})

})


.then((data) => {
    // Save the token in local storage
    localStorage.setItem('token', data.token);
    // redirect the user to the login page
    window.location.href = '/login';



    //ValidateForm();
    // Have the form Validate Users account info 
})
