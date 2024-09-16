const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://NFTMARKETPLACE:NFTMARKETPLACE@cluster0.7tf9wuz.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Implement your login logic here, e.g., validate credentials and create a session.

  // Respond with success or error message
  res.send('Login successful or error message');
});

app.post('/signup', (req, res) => {
  const { email, password, confirm_password } = req.body;

  if (password !== confirm_password) {
    res.send('Error: Passwords do not match');
  } else {
    const newUser = new User({
      email,
      password,
    });

    newUser.save((err) => {
      if (err) {
        res.send('Error: User not created');
      } else {
        res.send('User created successfully');
      }
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
