class Author {
  static all = []

  constructor(name) {
    this.name = name;
    Author.all.push(this);
  }

  blogs() {
    Blog.all.filter(blog => blog.author.name === this.name);
  }

  static find(name) {
    return Author.all.find(author => author.name === name);
  }

  static findOrCreate(name) {
    let author = Author.find(name);
    if (author) {
      return author
    } else {
      return new Author(name);
    }
  }
}