const db = require('../config/db');

exports.registerUser = (req, res) => {
  const { fullname, email, username, password } = req.body;

  const query = 'INSERT INTO users (fullname, email, username, password) VALUES (?, ?, ?, ?)';
  db.query(query, [fullname, email, username, password], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao registrar o usuário');
    } else {
      res.status(201).send('Usuário registrado com sucesso');
    }
  });
};