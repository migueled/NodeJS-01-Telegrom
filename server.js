const express = require('express');
//import expres from 'express'lo mismo de arriba

var app = express();

app.use('/', function(request, response) {
    response.send('Hello World');
});

app.listen(3000);

console.log('La aplicacion esta escuchando en el puerto 3000');