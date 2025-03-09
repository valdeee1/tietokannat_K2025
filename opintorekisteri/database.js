const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'valtteri',
  password: 'yykaakoonee',
  database: 'arviointitietokanta'
});
module.exports = connection;

