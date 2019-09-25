let colors = ["red", "green", "blue"];
let index = 0;
let maxIndex = colors.length;

const BASE_URL = 'http://localhost:3000'

function createData() {
  return {
    blog: {
      title: document.getElementById('title').value,
      content: document.getElementById('content').value
    },
    user: {
      name: document.getElementById('author').value
    }
  }
}

function displayBlog(blog) {
  // display post details in a card in the post-lists
  document.getElementsByClassName("post-lists")[0].innerHTML += formatBlog(blog);
}

function formatBlog(blog) {
  // create html template to add to the innerHTML of the post-lists
  return `
    <div class="card">
        <div class="card-content">
          <span class="card-title">${blog.title}</span>
          <p>By: ${blog.user.name}</p>
          <p>${blog.content}</p>
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
  let data = createData();
  fetch(BASE_URL + '/api/blogs', {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(blog => {
    displayBlog(blog)
    clearForm();
  })
}

function changeColor(event) {
  this.style.color = colors[index++];
  if(index == maxIndex) {
    index = 0;
  }
}

function loadBlogs() {
  // fetch to our rails back end
  // grab the data
  fetch(BASE_URL + '/api/blogs')
  .then(resp => resp.json())
  .then(blogs => {
    blogs.forEach(blog => displayBlog(blog))
    debugger
  })

  // ;
  // addClickEventToPostListHeader();
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
  // addMouseOverToWelcome();
  loadBlogs();
});