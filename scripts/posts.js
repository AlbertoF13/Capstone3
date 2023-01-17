/* Posts Page JavaScript */
"use strict";
// callApi2()

class Posts {
    constructor() {
        this.posts = []
    }

    getPosts(limit , offset) {
        const { token } = getLoginData();
        fetch(`https://microbloglite.herokuapp.com/api/posts?limit=${limit}&offset=${offset}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
        }
        })
        .then(response => response.json())
        .then(result => {result.forEach(post => this.posts.push(new Post(post._id , post.text , post.username , post.createdAt , post.likes)))})
        .then(result => this.displayPosts())
        .catch(error => console.log("error", error));
    }

    displayPosts(mypost) {
        document.getElementById("post").innerHTML = this.posts.map(post => postTemplate(post)).join(" ")
        console.log(this.posts[0]);
    }
}

class Post {

    constructor(id , text , username , createdAt , likes) {
        this.id = id
        this.text = text
        this.username = username
        this.createdAt =createdAt
        this.likes = likes
    }

    like() {
        //todo
    }

    unlike() {
        //todo
    }

    post() {
        //todo
    }

}


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
            <br>
            <!-- create a button here -->
            </br>
            <time datetime="2016-1-1">${post.createdAt}</time>
            </div>
        </div>
    </div>
    `
}

let allposts = new Posts()
allposts.getPosts(1000 , 0)
console.log(allposts.posts)






// function callApi2() {
//     const limit = 1000;
//     const offset = 0;
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







// post() {
    //         const token = getLoginData() //functional password
    
    //         let myHeaders = new Headers(); //a class
    //         myHeaders.append("Authorization", "Bearer " + token.token); //giving the password 
    //         myHeaders.append("Content-Type", "application/json"); //selecting the type of file (JSON)
            
    //         let raw = JSON.stringify({
    //         text: document.getElementById("postArea").value,
    //         }); //document translated from JSON and written in JS (that's what stringfy do) and displayed in the text area called "postArea"
            
    //         let requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //         }; //writing required information to fetch
            
    //         fetch("https://microbloglite.herokuapp.com/api/posts", requestOptions) //sending the information
    //         .then(response => response.json()) //getting the promisse
    //         .then(result => console.log(result)) 
    //         .catch(error => console.log('error', error));
            
    //     } //end of post method