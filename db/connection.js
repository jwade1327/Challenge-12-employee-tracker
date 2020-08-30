const mysql = require('mysql2');

const connection = mysql.makeConnection({
    host: 'localhost', 
    user: 'root',
    database: 'employees'
});

module.exports = connection;