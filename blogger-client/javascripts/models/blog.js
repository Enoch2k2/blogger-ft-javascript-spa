class Blog {
  static all = [];

  constructor(title, author, content) {
    this.title = title;
    this.author = author;
    this.content = content;
    Blog.all.push(this);
  }

  template() {
    // create html template to add to the innerHTML of the post-lists
    return `
      <div class="card">
          <div class="card-content">
            <span class="card-title">${this.title}</span>
            <p>By: ${this.author.name}</p>
            <p>${this.content}</p>
          </div>
      </div>
    `
  }

  display() {
    // display post details in a card in the post-lists
    document.getElementsByClassName("post-lists")[0].innerHTML += this.template();
  }

  static renderAll() {
    Blog.all.forEach(blog => blog.display())
  }
}