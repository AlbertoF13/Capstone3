/* Posts Page JavaScript */

"use strict";

function postTemplate(post) {
    return `
    <div class="card">
    <div class="card-content">
        <div class="media-content">
            <p class="title is-4"></p>
            <p class="subtitle is-6">@${post.username}</p>
        </div>
        </div>

        <div class="content">
        <p>${post.text}</p>.
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">${post.createdAt}</time>
        </div>
    </div>
    </div>
    `
}

function callApi(){

    const loginData = getLoginData()
    console.log(loginData.token)
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${loginData.token}`);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://microbloglite.herokuapp.com/api/posts?limit=2&offset=0", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const limit = 1000;
const offset = 0;

// function callApi2() {
//     const { token } = getLoginData();
//     fetch(`https://microbloglite.herokuapp.com/api/posts?limit=${limit}&offset=${offset}`, {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
//     .then(response => response.json())
//     .then(result => document.getElementById("post").innerHTML = result.map(postTemplate).join(" "))
//     .catch(error => console.log("error", error));
// }

function callApi2() {
    const { token } = getLoginData();
    fetch(`https://microbloglite.herokuapp.com/api/posts?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(result => {
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        document.getElementById("post").innerHTML = result.map(postTemplate).join(" ");
    })
    .catch(error => console.log("error", error));
}


