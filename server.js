const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files (including stylesheets)
app.use(express.static(path.join(__dirname, 'public')));

// Use the body-parser middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Define an array to store the temperature values
let temperatures = [];

app.get('/hello', (req, res) => {
  res.send('Hello World');
});
// Render the index page with the temperature values
app.get('/', (req, res) => {
  res.render('index', { temperatures });
});

// Add a new temperature value to the array
app.post('/', (req, res) => {
  temperatures.push(req.body.temperature);
  res.redirect('/');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
