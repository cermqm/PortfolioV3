const express = require('express');
const url = require('url');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('Request for contact page recieved');
  res.render('contact');
});

router.post('/send', (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  var enquiry = req.body.enquiry;

  var emailMessage = `Hi ${name},\n\nThank you for contacting us.\n\nYour email is: ${email}.\n\nYour enquiry is: ${enquiry}\n.`;
  var emailMessage2 = `Email from ${name},\n\nTheir email address is: ${email}.\n\nPlease follow-up on - ${enquiry}\n.`;

  console.log(emailMessage);
  res.redirect('/contact_send');

  var smtpConfig = {
    host: 'mail.michaelamink.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'minkcontactform@michaelamink.com',
        pass: 'mminkmmink'
    }
};

  var transporter = nodemailer.createTransport(smtpConfig);

  var emailOptions = {
    from: 'minkcontactform@michaelamink.com',
    to: email,
    subject: 'Portfolio email',
    text: emailMessage
  };

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.redirect('/contact_send');
    } else {
      console.log('Message Sent: ' + info.response);
      console.log('Email Message: ' + emailMessage);
      res.redirect('/contact_error');
    }
  });

  var emailOptions = {
    from: email,
    to: 'minkcontactform@michaelamink.com',
    subject: 'Portfolio email',
    text: emailMessage2
  };

  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.redirect('/contact_send');
    } else {
      console.log('Message Sent: ' + info.response);
      console.log('Email Message: ' + emailMessage2);
      res.redirect('/contact_error');
    }
  });
});

module.exports = router;