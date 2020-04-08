class Blog {
  static all = [];

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.user = data.user;
    this.save();
  }

  save() {
    Blog.all.push(this);
  }

  template() {
    return `
        <div class="card">
          <div class="card-content">
            <a href="#" class="card-title">${this.title}</a>
            <p>Author: ${this.user.name}</p>
            <p>Content: ${this.content} </p>
          </div>
        </div>
      `
  }

  render() {
    getPostLists().innerHTML += this.template();
  }

  static renderBlogs() {
    Blog.all.forEach(blog => blog.render())
  }

  static createFromForm(e) {
    e.preventDefault();

    const title = getTitle().value;
    const content = getContent().value;
    const name = getAuthor().value;


    let strongParams = {
      user: { name },
      blog: {
        title: title,
        content: content
      }
    };

    API.post('/blogs', strongParams)
      .then(data => {
        let blog = new Blog(data)
        blog.render();
        resetInput();
      })
  }

  static load() {
    // fetch, sends a GET request by default

    API.get('/blogs')
      .then(function (blogs) { // data is an array of blogs
        blogs.forEach(data => new Blog(data))
        Blog.renderBlogs();
      })
      .catch(errors => console.log(errors));
  }
}