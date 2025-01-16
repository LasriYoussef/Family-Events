const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connecté pour Family-Event'))
  .catch((err) => console.error('Erreur de connexion à MongoDB :', err));

// Routes de base
app.get('/', (req, res) => {
  res.send('API Family-Event Fonctionnelle');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Family-Event backend lancé sur http://localhost:${PORT}`);
});
