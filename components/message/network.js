const express = require('express');
const responseNetwork = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', function(request, response) {
    console.log(request.headers); //leer cabeceras
    response.header({
        'custom-header': 'Nuestro avlor persobalizado'
    });
    responseNetwork.success(request, response, 'Lista de mensajes');
});

router.post('/', function(request, response) {

    controller.addMessage(request.body.user, request.body.message).
    then((fullMessage) => {
        responseNetwork.success(request, response, fullMessage, 200);
    }).catch(e => {
        responseNetwork.error(request, response, 'Error inesperado', 500, 'Error al enviar mensaje');
    });

});

module.exports = router;