document.addEventListener('DOMContentLoaded', function () {
  // all the code we want to start running at page load
  getBlogs(); // this should send an ajax call to rails side in order to fetch all of the blog information
  getForm().addEventListener('submit', createFromForm);
})

let blogs = [];

const getForm = () => document.querySelector('form');
const getPostLists = () => document.querySelector('div.post-lists');
const getTitle = () => document.getElementById('title').value;
const getAuthor = () => document.getElementById('author').value;
const getContent = () => document.getElementById('content').value;

function template(blog) {
  return `
      <div class="card">
        <div class="card-content">
          <a href="#" class="card-title">${blog.title}</a>
          <p>Author: ${blog.user.name}</p>
          <p>Content: ${blog.content} </p>
        </div>
      </div>
    `
}

function getBlogs() {
  // fetch, sends a GET request by default

  fetch('http://localhost:3000/api/blogs')
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.json()
    })
    .then(function (data) {
      blogs = data;
      renderBlogs()
    })
    .catch(errors => console.log(errors));
}

function renderBlogs() {
  blogs.forEach(blog => render(blog))
}

function render(blog) {
  getPostLists().innerHTML += template(blog)
}

function createFromForm(e) {
  e.preventDefault();

  /*
    - formulate strong params as data to match our rails strong params

    - get returned a promise from our ajax call, and add the blog to the page

    strong params:

    {
      user: {
        name: "Bob"
      },
      blog: {
        title: "Some Title",
        content: "Some content"
      }
    }
  */

  const title = getTitle();
  const content = getContent()
  const name = getAuthor()


  let strongParams = {
    user: { name: name },
    blog: {
      title: title,
      content: content
    }
  };

  fetch('http://localhost:3000/api/blogs', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(strongParams)
  })
    .then(resp => resp.json())
    .then(blog => {
      blogs.push(blog);

      render(blog)
    })

}


// 3 questions for easy events
// What is the overall feature?
// What triggers this feature?
// When should we be able to trigger this feature?

// submit the form
// on load we should be able to submit the form