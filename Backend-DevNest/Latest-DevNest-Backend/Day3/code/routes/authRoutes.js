const express = require('express');
const router = express.Router();
const {
  validateName,
  validateEmail,
  validatePassword,
} = require('../utils/validator');
const bcrypt = require('bcrypt');
let users = {};
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const userExist = users.hasOwnProperty(email);

    if (userExist) {
      res.send('User exists');
    }

    if (!validateName(name)) {
      res.send('Invalid name');
    }
    if (!validateEmail(email)) {
      res.send('Invalid email');
    }

    if (!validatePassword(password)) {
      res.send('Invalid password');
    }

    const Epassword = await bcrypt.hash(password, 10);
    users[email] = { name, password: Epassword };

    res.send('Success');
  } catch (e) {
    res.send(e);
  }
});
module.exports = router;
