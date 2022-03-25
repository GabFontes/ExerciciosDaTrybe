const express = require('express');
const app = express();

const PORT = 3000;

const author = require('./models/author');
const { getAllBooks, getByAuthorId } = require('./models/book');

app.get('/authors', async (req, res) => {
  const authors = await author.getAll();
  
  res.status(200).json(authors);
})

app.get('/books', async (req, res) => {
  const books = await getAllBooks();

  return res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await getByAuthorId(id);

  return res.status(200).json(books);
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));