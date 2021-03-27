const express = require('express');
const multer = require('multer'); //ejecutar npm i multer
const responseNetwork = require('../../network/response');
const controller = require('./controller');
const router = express.Router();
const path = require('path'); // no es necesario ejecutar npm

const storage = multer.diskStorage({
    destination: "public/files/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.get('/', function(request, response) {

    const filterMessages = request.query.chat || null;

    controller.getMessage(filterMessages).
    then((messageList) => {
        responseNetwork.success(request, response, messageList, 200);
    }).catch(e => {
        responseNetwork.error(request, response, 'Unexpected Error', 500, e);
    });
});

router.post('/', upload.single('file'), function(request, response) {
    controller.addMessage(request.body.chat, request.body.user, request.body.message, request.file).
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

router.delete('/:id', function(req, res) { //1
    controller.deleteMessage(req.params.id).
    then(() => {
        responseNetwork.success(req, res, `Usuario ${req.params.id} Eliminado`, 200);
    }).catch(e => {
        responseNetwork.error(request, response, 'Error Interno', 500, e);
    });
});
module.exports = router;