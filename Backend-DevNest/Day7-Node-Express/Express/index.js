/*
const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact Page</h1>');
});

app.listen(port, () => {
  console.log(`Server is working on port : ${port}`);
});
*/
/*
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/api/v1/login', (req, res) => {
  //   const userName = req.body.name;
  res.send(`<h1>DONE Mr.${req.body.name}</h1> <h2>Your Email is 
  ${req.body.email}</h2>  <h3>Your password is ${req.body.password}</h3>`);
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is working on port : ${port}`);
});
*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname) + '/index.html');
});

app.post('/api/v1/register', (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  res.json({
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Server is working on port : ${port}`);
});
