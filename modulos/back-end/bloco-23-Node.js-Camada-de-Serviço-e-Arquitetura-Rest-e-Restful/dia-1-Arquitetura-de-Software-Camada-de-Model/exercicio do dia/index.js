const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json())

const { verifyPassword, verifyValues } = require('./middlewares/userValidation');
const { createUser, getAllUsers, getUserById, editUser, deleteUser } = require('./models/user');
const res = require('express/lib/response');

app.post('/user', verifyPassword, verifyValues, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await createUser({ firstName, lastName, email, password });
    console.log(user);
    return res.status(201).json(user);
  } catch (error) {
    console.log(`Pane no sistema ${error}`);
    return res.status(500).end()
  }
})

app.put('/user/:id', verifyPassword, verifyValues, async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const result = await editUser(
      { id, firstName, lastName, email, password }
    );
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
})

app.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
})

app.get('/user', async (req, res) => {
  try {
    const users = await getAllUsers();
    if (users.length === 0) {
      return res.status(200).json([]);
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
})

app.delete('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id)
    return res.status(200).send({ message: "Usuário deletado" })
  } catch (error) {
    console.log(error);
  }
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));