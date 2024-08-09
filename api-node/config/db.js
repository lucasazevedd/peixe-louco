const mysql = require('mysql2');

// Conexão com o banco de dados MySQL (adapte para sua configuração)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '20020614',
    database: 'peixe_louco'
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL');
  });

  
  module.exports = connection;