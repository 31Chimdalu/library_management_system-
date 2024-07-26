const Book = require('../models/book');
const Library = require('../models/library');

class BookController {
  static addBook(library, title, author, ISBN) {
    const book = new Book(title, author, ISBN);
    library.addBook(book);
    return book;
  }

  static borrowBook(library, userId, ISBN) {
    const user = library.findUserById(userId);
    const book = library.findBookByISBN(ISBN);
    if (user && book && !book.isBorrowed && user.borrowBook(book)) {
      book.borrow();
      return book;
    }
    return null;
  }

  static returnBook(library, userId, ISBN) {
    const user = library.findUserById(userId);
    const book = library.findBookByISBN(ISBN);
    if (user && book) {
      user.returnBook(book);
      return book;
    }
    return null;
  }
}

module.exports = BookController;
