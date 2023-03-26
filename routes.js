const express = require('express');
const router = express.Router();

// Route pour obtenir tous les éléments
router.get('/elements', (req, res) => {
  res.send('Obtenir tous les éléments');
});

// Route pour obtenir un élément spécifique
router.get('/elements/:id', (req, res) => {
  res.send(`Obtenir l'élément avec l'ID ${req.params.id}`);
});

// Route pour créer un nouvel élément
router.post('/elements', (req, res) => {
  res.send('Créer un nouvel élément');
});

// Route pour mettre à jour un élément spécifique
router.put('/elements/:id', (req, res) => {
  res.send(`Mettre à jour l'élément avec l'ID ${req.params.id}`);
});

// Route pour supprimer un élément spécifique
router.delete('/elements/:id', (req, res) => {
  res.send(`Supprimer l'élément avec l'ID ${req.params.id}`);
});

module.exports = router;