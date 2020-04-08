document.addEventListener('DOMContentLoaded', function () {
  // all the code we want to start running at page load
  Blog.load(); // this should send an ajax call to rails side in order to fetch all of the blog information
  getForm().addEventListener('submit', Blog.createFromForm);
})

const getForm = () => document.querySelector('form');
const getPostLists = () => document.querySelector('div.post-lists');
const getTitle = () => document.getElementById('title');
const getAuthor = () => document.getElementById('author');
const getContent = () => document.getElementById('content');

function resetInput() {
  getTitle().value = '';
  getAuthor().value = '';
  getContent().value = '';
}

// 3 questions for easy events
// What is the overall feature?
// What triggers this feature?
// When should we be able to trigger this feature?

// submit the form
// on load we should be able to submit the form