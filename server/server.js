// Deixando só o necessário
const express = require("express");
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const db = require('./config/db');

const app = express();

// Middleware
app.use(express.json()); // Processa requisição JSON
app.use(cors())

// Rota de usuários
app.use('/api', userRoutes)

// Porta do servidor 
app.listen(3001, () => {
  console.log('Servidor ok')
});