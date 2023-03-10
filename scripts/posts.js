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
        .then(result => {result.forEach(post => this.posts.push(new Post( post._id , post.text , post.createdAt)))})
        .then(result => this.displayPosts())
        .catch(error => console.log("error", error));
    }

    displayPosts(mypost) {
        document.getElementById("post").innerHTML = this.posts.map(post => postTemplate(post)).join(" ")
        this.posts.map(post => {
            let currentpost = document.getElementById(post.id)
            currentpost.addEventListener("click" , function() {post.like()})
        })
    }
}

class Post {

    constructor( id , text , createdAt) {
        this.id = id
        this.text = text
        this.createdAt = createdAt
        // console.log(this.id)
    }

    like() {
        const { token } = getLoginData();
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        console.log(myHeaders)
        var raw = JSON.stringify({
            "postId": `${this.id}`
        });
        console.log(raw);
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://microbloglite.herokuapp.com/api/likes", requestOptions)
        .then(response => response.json())
        .then(result => console.log(this.id))
        .catch(error => console.log('error', error));
    }

    unlike() {
        //todo
    }

    numberOfLikes() {
        // console.log(this.likes.length)
        return this.likes.length
    }

    post() {
        //todo
    }
}

function postTemplate(post) {
    const template = `
    <div class="card">
        <div class="card-content">
            <div class="media-content">
                <p class="title is-4"></p>
                <p class="subtitle is-6">@${post.username}</p>
            </div>
            </div>

            <div class="content">
            <p>${post.text} - ${post.id}</p>
            <br>
            <button id="${post.id}">Like</button>
           
            </br>
            <time datetime="2016-1-1">${post.createdAt}</time>
            </div>
        </div>
    </div>
    `
   return template
}

let allposts = new Posts()
allposts.getPosts(1000 , 0)

// let singlepost = new Post()
// singlepost.like()
// console.log(singlepost)











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