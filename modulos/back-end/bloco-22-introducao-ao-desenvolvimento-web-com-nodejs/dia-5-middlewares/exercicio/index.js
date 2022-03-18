const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (res) => {
  res.status(200).send("Miau")
});


const validateUsername = (username) => {
  if (username && username.lenght > 3) {
    return true;
  }

  return false;
}

const validatePassword = (password) => {
  if (password && password.length >= 4 && password.length <= 8) {
    return true;
  }

  return false;
}

const validateEmail = (email) => {
  if (email) {
    const vEmail = email.split('@');
    const vEmail2 = email.split('.');

    if (email && vEmail.length === 2 && vEmail2.length === 2) {
      return true;
    }
  }

  return false;
}


app.post('/user/register', (req, res) => {
  const { username, email, password } = req.body;
  const senha = parseInt(password);

  if (!validateUsername(username) && !validateEmail(email) && !validatePassword(senha)) {
    return res.status(400).json({ "message": "invalid data" });
  }

  return res.status(201).json({ "message": "user created" });
})

app.listen(3002, () => { console.log('Ouvindo na porta 3002'); });