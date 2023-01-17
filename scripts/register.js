const form = document.getElementById('registertrationForm')

function registerUser(event) {
  const usernameInput = document.getElementById('username').value;
  const fullnameInput = document.getElementById('fullname').value;
  const passwordInput = document.getElementById('password').value; 
      
  event.preventDefault();

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    "username": usernameInput,
    "fullName": fullnameInput,
    "password": passwordInput,
  });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://microbloglite.herokuapp.com/api/users", requestOptions)
    .then(response => response.json())
    .then(result => 
      {
          alert(result);
          console.log(result);
      }
    )
}

form.addEventListener('submit',  registerUser)

const usernameInput = document.getElementById('username').value;
const fullnameInput = document.getElementById('fullname').value;
const passwordInput = document.getElementById('password').value; 