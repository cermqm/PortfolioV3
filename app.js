const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { pageRouter } = require('./routes');
const { contact } = require('./routes');
const { portfolio } = require('./routes');

const app = express();
// Set the default views directory to html folder
app.set('views', path.join(__dirname, '/public/html'));

// Pass messages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set the folder for css & java scripts
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// app.use(express.static(__dirname + 'public'));
app.use(express.static('public'))

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/contact', contact);
app.use('/', pageRouter);
// app.use('/portfolio', portfolio);

app.listen(3000, () => {
  console.log('Server is running at localhost:3000');
});