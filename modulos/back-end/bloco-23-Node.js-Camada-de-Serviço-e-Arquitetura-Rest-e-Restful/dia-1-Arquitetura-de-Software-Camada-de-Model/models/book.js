const connection = require('./connection');

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT * FROM books');
  return books;
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute('SELECT * FROM books where id = ?', [id]);
  
  return books;
}

module.exports = {
  getAllBooks,
  getByAuthorId,
}