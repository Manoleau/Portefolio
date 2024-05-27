const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
app.get('/projets', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/projets.html'))
});
app.get('/aboutme', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/propos.html'))
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log(`Serveur lancé sur http://localhost:${3000}`);
});