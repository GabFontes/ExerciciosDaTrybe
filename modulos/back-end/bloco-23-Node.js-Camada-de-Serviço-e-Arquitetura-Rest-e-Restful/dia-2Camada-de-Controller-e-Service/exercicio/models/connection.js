const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: 'gab',
    host: 'localhost',
    password: 'Gabriel.40028922',
    database: 'cep_lookup',
})

module.exports = connection;