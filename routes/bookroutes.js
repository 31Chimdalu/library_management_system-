const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookcontroller');
const Library = require('../models/library');
const Book = require('../models/book'); 
const library = new Library();

router.post('/books', (req, res) => {
  const { title, author, ISBN } = req.body;
  const book = BookController.addBook(library, title, author, ISBN);
  res.status(201).json(book);
});

router.post('/borrow', (req, res) => {
  const { userId, ISBN } = req.body;
  const book = BookController.borrowBook(library, userId, ISBN);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(400).json({ message: 'Cannot borrow book' });
  }
});

router.post('/return', (req, res) => {
  const { userId, ISBN } = req.body;
  const book = BookController.returnBook(library, userId, ISBN);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(400).json({ message: 'Cannot return book' });
  }
});

// Sample books and users
library.addBook(new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565'));
library.addBook(new Book('1984', 'George Orwell', '9780451524935'));
// const sampleBooks = [
//     new Book('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565'),
//     new Book('1984', 'George Orwell', '9780451524935')
//   ];
//   sampleBooks.forEach(book => library.addBook(book));
  
  // View books
  router.get('/books', (req, res) => {
    const books = library.books;
    res.render('books', { books });
  });
  
module.exports = router;