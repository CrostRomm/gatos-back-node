const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const gatos = require('./routes/gatos');
const imagenes = require('./routes/imagenes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/gatos', gatos);
app.use('/imagenes', imagenes);

module.exports = app;