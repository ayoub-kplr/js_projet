const express = require('express');
const app = express();  // Route principale
app.get('/', (req, res) => {
    res.send('API RESTful avec Node.js et Express.js');
});  // Démarrer le serveur
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
})

const routes = require('./routes');
app.use('/', routes);