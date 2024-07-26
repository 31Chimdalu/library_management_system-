class Library {
    constructor() {
      this.books = [];
      this.users = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    borrowBook(user, book) {
        if (this.books.includes(book)) {
          user.borrowBook(book);
          this.removeBook(book);
        }
      }
    
      returnBook(user, book) {
        if (user.borrowedBooks.includes(book)) {
          user.returnBook(book);
          this.addBook(book);
        }
      }
      
    registerUser(user) {
      this.users.push(user);
    }
  
    findBookByISBN(ISBN) {
      return this.books.find(book => book.ISBN === ISBN);
    }
  
    findUserById(userId) {
      return this.users.find(user => user.id === userId);
    }
  }
  
  module.exports = Library;
  