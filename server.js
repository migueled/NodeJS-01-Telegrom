const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); //trabajar con body
//import expres from 'express'lo mismo de arriba

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', function(request, response) {
    console.log(request.headers); //leer cabeceras
    response.header({
        'custom-header': 'Nuestro avlor persobalizado'
    });
    response.send('Hello from get');
});

router.post('/message', function(request, response) {
    console.log(request.body);
    console.log(request.query);
    response.status(201).send([{ error: '', message: 'created success' }]);
});

app.listen(3000);

console.log('La aplicacion esta escuchando en el puerto 3000');