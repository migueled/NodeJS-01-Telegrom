const express = require('express');
const router = express.Router();
//import expres from 'express'lo mismo de arriba

var app = express();

app.use(router);

router.get('/', function(request, response) {
    response.send('Hello from get');
});

app.listen(3000);

console.log('La aplicacion esta escuchando en el puerto 3000');