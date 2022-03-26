// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'gab',
  password: 'Gabriel.40028922',
  database: 'model_example'
});

module.exports = connection;