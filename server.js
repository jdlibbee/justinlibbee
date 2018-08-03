var express = require('express')
var path = require("path");
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var data = require("./config");


var app = express()

app.use(express.static("./assets"))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "./index.html"))
})

app.post('/api/nodemailer', function (req, res) {
  var emailData = req.body


  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: data.user,
      pass: data.password
    }
  });

  var mailOptions = {
    from: data.user,
    to: data.user,
    subject: 'Contact from your Portfolio',
    html: `<ul>
          <li>From: ${emailData.firstName} ${emailData.lastName}</li>
          <li>Email: ${emailData.email}</li>
          </ul>
          <p>${emailData.message}</p>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json("nope")
    } else {
      console.log('Email sent: ' + info.response);
      res.json("yep")
    }
  });
})


app.listen(3000)