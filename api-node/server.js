const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const db = require('./config/db');

const app = express();

// Middleware
app.use(express.json());
app.use(cors())
app.use(bodyParser.json());
app.use('/api', userRoutes)

 
app.listen(3000, () => {
  console.log('Servidor ok')
});