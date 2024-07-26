const { v4: uuidv4 } = require('uuid');

class Book {
  constructor(title, author, ISBN) {
    this.id = uuidv4();
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isBorrowed = false;
  }

  borrow() {
    if (!this.isBorrowed) {
      this.isBorrowed = true;
      return true;
    }
    return false;
  }

  return() {
    this.isBorrowed = false;
  }
}

module.exports = Book;
