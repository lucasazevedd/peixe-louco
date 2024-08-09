const mysql = require('mysql2');

// Conexão com o banco de dados MySQL (adapte para sua configuração)
const connection = mysql.createConnection({
    host: 'seu host',
    user: 'seu user',
    password: 'sua senha',
    database: 'seu banco'
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL');
  });

  
  module.exports = connection;