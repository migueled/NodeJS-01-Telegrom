const express = require('express');
const responseNetwork = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/', function(request, response) {

    const filterMessages = request.query.user || null;

    controller.getMessage(filterMessages).
    then((messageList) => {
        responseNetwork.success(request, response, messageList, 200);
    }).catch(e => {
        responseNetwork.error(request, response, 'Unexpected Error', 500, e);
    });
});

router.post('/', function(request, response) {

    controller.addMessage(request.body.user, request.body.message).
    then((fullMessage) => {
        responseNetwork.success(request, response, fullMessage, 200);
    }).catch(e => {
        responseNetwork.error(request, response, 'Error inesperado', 500, 'Error al enviar mensaje');
    });

});

router.patch('/:id', function(request, response) {
    controller.updateMessage(request.params.id, request.body.message).
    then((data) => {
        responseNetwork.success(request, response, data, 200);
    }).catch(e => {
        responseNetwork.error(request, response, 'Error Interno', 500, e);
    });
});
module.exports = router;