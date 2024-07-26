const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller');
const Library = require('../models/library');
const user = require('../models/user');
const library = new Library();

// // Sample data - Pre-register a user and add books for demonstration
// library.registerUser(new User('John Doe'));

//register a user
router.post('/users', (req, res) => {
  const { name } = req.body;
  const user = UserController.registerUser(library, name);
  res.status(201).json(user);
});

// View all users
router.get('/users', (req, res) => {
    const users = library.users;
    res.render('users', { users });
  });

//view user 
router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = UserController.getUser(library, userId);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// View a single user
// router.get('/users/:id', (req, res) => {
//     const userId = req.params.id;
//     const user = UserController.getUser(library, userId);
//     if (user) {
//       res.render('userDetail', { user });
//     } else {
//       res.status(404).render('error', { message: 'User not found' });
//     }
//   });

// Borrow a book
router.post('/borrow', (req, res) => {
    const { userEmail, bookTitle } = req.body;
    const user = library.users.find(u => u.email === userEmail);
    const book = library.books.find(b => b.title === bookTitle);
  
    if (user && book) {
      library.borrowBook(user, book);
      res.redirect('/users');
    } else {
      res.status(400).send('Invalid user or book');
    }
  });

// Return a book
router.post('/return', (req, res) => {
    const { userEmail, bookTitle } = req.body;
    const user = library.users.find(u => u.email === userEmail);
    const book = library.books.find(b => b.title === bookTitle);
  
    if (user && book) {
      library.returnBook(user, book);
      res.redirect('/users');
    } else {
      res.status(400).send('Invalid user or book');
    }
  });  

module.exports = router;
