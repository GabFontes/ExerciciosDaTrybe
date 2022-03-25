const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: 'gab',
    password: 'Gabriel.40028922',
    host: 'localhost',
    database: 'model_example'
});

module.exports = connection;