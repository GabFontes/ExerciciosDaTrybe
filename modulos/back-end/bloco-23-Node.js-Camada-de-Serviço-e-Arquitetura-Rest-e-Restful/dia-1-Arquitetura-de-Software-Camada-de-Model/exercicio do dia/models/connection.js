const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'gab',
  password: 'Gabriel.40028922',
  database: 'users_crud'
})

module.exports = connection;