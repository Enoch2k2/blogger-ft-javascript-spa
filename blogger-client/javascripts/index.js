document.addEventListener('DOMContentLoaded', function () {
  // all the code we want to start running at page load
  getForm().addEventListener('submit', Blog.createFromForm);
  Blog.getBlogs();
})


const getForm = () => document.querySelector('form');
const getPostLists = () => document.querySelector('div.post-lists');
const getTitle = () => document.getElementById('title').value;
const getAuthor = () => document.getElementById('author').value;
const getContent = () => document.getElementById('content').value;

// 3 questions for easy events
// What is the overall feature?
// What triggers this feature?
// When should we be able to trigger this feature?

// submit the form
// on load we should be able to submit the form