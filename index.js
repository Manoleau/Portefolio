const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'portfolioDB'
});


app.get('/projets/info', (req, res) => {
    db.query('SELECT * FROM projet', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});

