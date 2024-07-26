const { v4: uuidv4 } = require('uuid');

class User {
  constructor(name) {
    this.id = uuidv4();
    this.name = name;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (this.borrowedBooks.length >= 3) {
      return false;
    }
    this.borrowedBooks.push(book);
    return true;
  }

  returnBook(book) {
    this.borrowedBooks = this.borrowedBooks.filter(b => b.id !== book.id);
    book.return();
  }
}

module.exports = User;
