const Book = require('./models/book');
const User = require('./models/user');
const Library = require('./models/library');

// Create a new library instance
const library = new Library();

// Add books to the library
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565');
const book2 = new Book('1984', 'George Orwell', '9780451524935');
library.addBook(book1);
library.addBook(book2);

// Register a new user
const user = new User('John Doe');
library.registerUser(user);

// Borrow a book
if (user.borrowBook(book1)) {
  console.log(`${user.name} has borrowed ${book1.title}`);
} else {
  console.log(`${user.name} could not borrow ${book1.title}`);
}

// Return a book
user.returnBook(book1);
console.log(`${user.name} has returned ${book1.title}`);
