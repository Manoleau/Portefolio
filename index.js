const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'portfolioDB'
// });
require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});
app.get('/projets', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/projets.html'))
});
app.get('/aboutme', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/propos.html'))
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/contact.html'))
});
app.get('/contacts/info', (req, res) => {
    connection.query('SELECT * FROM contact', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/projets/info', (req, res) => {
    connection.query('SELECT * FROM projet', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/competences/info', (req, res) => {
    const query = 'SELECT c.nom, c.image, c.niveau, c.url, t.nomType, t.imageType FROM competence as c JOIN typecompetence as t ON c.type = t.id ORDER BY t.id ASC, niveau DESC;'
    connection.query(query, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/exppro/info', (req, res) => {
    const query = 'SELECT * FROM experiencepro ORDER BY dateFin DESC;';
    connection.query(query, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
app.get('/hero/info', (req, res) => {
    const heroId = req.query.id;
    const query = 'SELECT * FROM hero WHERE id = ?';
    connection.query(query, [heroId], (err, result) => { // Passage de l'ID du héros à la requête
        if (err) {
            throw err;
        }
        res.json(result);
    });
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});