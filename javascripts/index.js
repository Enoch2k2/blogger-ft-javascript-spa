let posts = [
  {
    title: "Bob's great adventure",
    author: "Sam",
    content: "Sam and bob get stuck at walmart."
  },
  {
    title: "Another post",
    author: "Fred",
    content: "Post content"
  },
  {
    title: "Another post 2",
    author: "sarah",
    content: "Post content 2"
  }
];

let colors = ["red", "green", "blue"];
let index = 0;
let maxIndex = colors.length;

function createPost() {
  // create post object
  return {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    content: document.getElementById('content').value
  }
  // return post object
}

function displayPost(post) {
  // display post details in a card in the post-lists
  document.getElementsByClassName("post-lists")[0].innerHTML += formatPost(post);
}

function formatPost(post) {
  // create html template to add to the innerHTML of the post-lists
  return `
    <div class="card">
        <div class="card-content">
          <span class="card-title">${post.title}</span>
          <p>By: ${post.author}</p>
          <p>${post.content}</p>
        </div>
    </div>
  `
}

function clearForm() {
  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("content").value = ""
}

function submitForm(event) {
  event.preventDefault();
  let post = createPost();
  displayPost(post)
  clearForm();
}

function changeColor(event) {
  this.style.color = colors[index++];
  if(index == maxIndex) {
    index = 0;
  }
}

function loadPosts() {
  // fetch to our rails back end
  // grab the data

  posts.forEach(post => displayPost(post));
  addClickEventToPostListHeader();
}

function addClickEventToPostListHeader() {
  document.querySelector('.post-lists h3').addEventListener('click', changeColor);
}

function addSubmitEventToForm() {
  document.getElementById("blog-form").addEventListener('submit', submitForm);
}

function addMouseOverToWelcome() {
  document.querySelector('h1').addEventListener('mouseover', changeColor);
}

document.addEventListener('DOMContentLoaded', function () {
  // We have access to all of the DOM elements
  addSubmitEventToForm();
  addMouseOverToWelcome();
  loadPosts();
});