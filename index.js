const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookroutes');
const userRoutes = require('./routes/userroutes');
const path = require('path')

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'views/css')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRoutes);
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.render('index');
  });

app.listen(port, () => {
  console.log(`Library Management System running on port ${port}`);
});
