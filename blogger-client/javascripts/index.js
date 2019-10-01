let colors = ["red", "green", "blue"];
let index = 0;
let maxIndex = colors.length;

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

function clearForm() {
  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("content").value = ""
}


function changeColor(event) {
  this.style.color = colors[index++];
  if(index == maxIndex) {
    index = 0;
  }
}

function addClickEventToPostListHeader() {
  document.querySelector('.post-lists h3').addEventListener('click', changeColor);
}

function addSubmitEventToForm() {
  document.getElementById("blog-form").addEventListener('submit', Api.submitBlog);
}

function addMouseOverToWelcome() {
  document.querySelector('h1').addEventListener('mouseover', changeColor);
}

document.addEventListener('DOMContentLoaded', function () {
  // We have access to all of the DOM elements
  addSubmitEventToForm();
  // addMouseOverToWelcome();
  Api.getBlogs();
});