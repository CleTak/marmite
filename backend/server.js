const express = require('express');
const cors = require('cors');

// pour vérifier la connexion à la base au démarrage
require('./models/db');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'hello world' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
