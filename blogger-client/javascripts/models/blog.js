class Blog {
  static all = [];

  constructor(json) {
    this.title = json.title;
    this.content = json.content;
    this.author = json.user;
    this.id = json.id;
    Blog.all.push(this);
  }

  template() {
    return `
      <div class="card">
        <div class="card-content">
          <a href="#" class="card-title">${this.title}</a>
          <p>Author: ${this.author.name}</p>
          <p>Content: ${this.content} </p>
        </div>
      </div>
    `
  }

  render() {
    getPostLists().innerHTML += this.template();
  }

  static getBlogs() {
    Api.get('/blogs')
      .then(blogs => {
        blogs.forEach(json => {
          let blog = new Blog(json);
          blog.render();
        })
      })
  }

  static createFromForm(e) {
    e.preventDefault();

    let data = {
      blog: {
        title: getTitle(),
        content: getContent()
      },
      user: {
        name: getAuthor()
      }
    }

    Api.post('/blogs', data)
      .then(json => {
        let blog = new Blog(json);
        blog.render();
      })
  }
}