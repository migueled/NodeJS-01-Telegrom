const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
    controller.addUser(req.body.name).
    then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/', function(req, res) {

    const filterUser = req.query.name || null;

    controller.getUser(filterUser).
    then((data) => {
        response.success(req, res, data, 201);
    }).catch(err => {
        response.error(req, res, 'Error get users', 500, err);
    });
});

module.exports = router;