const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const puerto = 3001;

app.use(express.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    let ruta = path.join(__dirname, "./views/index.html")
    res.sendFile(ruta);
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
})

app.post('/register', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
})

app.post('/login', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(puerto, () => {
    console.log('Aplicación escuchando en puerto 3001');
});

