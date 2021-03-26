const express = require('express');
const responseNetwork = require('../../network/response');

const router = express.Router();


router.get('/', function(request, response) {
    console.log(request.headers); //leer cabeceras
    response.header({
        'custom-header': 'Nuestro avlor persobalizado'
    });
    responseNetwork.success(request, response, 'Lista de mensajes');
});

router.post('/', function(request, response) {
    console.log(request.body);
    if (request.query.error == 'ok') {
        responseNetwork.error(request, response, 'Error inesperado', 500, 'Es solo una simulacion de los errores');
    } else {
        responseNetwork.success(request, response, 'Creado correctamente', 201);
    }
});

module.exports = router;