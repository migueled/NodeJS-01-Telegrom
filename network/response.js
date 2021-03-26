exports.success = function(request, response, message, status) {
    response.status(status || 200).send({
        error: '',
        body: message
    });
}

exports.error = function(request, response, message, status, details) {
    console.error('[response error]' + details);
    response.status(status || 500).send({
        error: message,
        body: ''
    });
}