const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Request for home recieved');
  res.render('index');
});

router.get('/portfolio', (req, res) => {
  console.log('Request for portfolio recieved');
  res.render('portfolio');
});

router.get('/contact', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('contact');
});

module.exports = {
  pageRouter: require('./pageRouter.js'),
  contact: require('./contact.js')
}