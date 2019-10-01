class Api {
  static baseUrl = 'http://localhost:3000'

  static getBlogs() {
    fetch(Api.baseUrl + '/api/blogs')
      .then(resp => resp.json())
      .then(blogs => {
        blogs.forEach(blog => {
          let author = Author.findOrCreate(blog.user.name);
          let newBlog = new Blog(blog.title, author, blog.content);
        })
        Blog.renderAll();
      })
      .catch(errors => console.log('d', errors))
  }

  static submitBlog(event) {
    event.preventDefault();
    let data = createData();
    fetch(Api.baseUrl + '/api/blogs', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        let author = Author.findOrCreate(data.user.name);
        let blog = new Blog(data.title, author, data.content);
        blog.display();
      })
  }

}