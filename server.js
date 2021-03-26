const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); //trabajar con body
//import expres from 'express'lo mismo de arriba
const responseNetwork = require('./network/response');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', function(request, response) {
    console.log(request.headers); //leer cabeceras
    response.header({
        'custom-header': 'Nuestro avlor persobalizado'
    });
    responseNetwork.success(request, response, 'Lista de mensajes');
});

router.post('/message', function(request, response) {
    console.log(request.body);
    if (request.query.error == 'ok') {
        responseNetwork.success(request, response, 'Error simulado', 400);
    } else {
        responseNetwork.success(request, response, 'Creado correctamente', 201);
    }
});

app.listen(3000);

console.log('La aplicacion esta escuchando en el puerto 3000');