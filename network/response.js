const statusMessage = {
    '200': 'done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
};
exports.success = function(request, response, message, status) {
    let statusCode = status;
    let statusMessage = message;
    
    if (!status) {
        status = 200;
    }
    if (!message) {
        statusMessage = statusMessage[status];
    }
    response.status(statusCode).send({
        error: '',
        body: statusMessage
    });
}

exports.error = function(request, response, message, status, details) {
    console.error('[response error]' + details);
    response.status(status || 500).send({
        error: message,
        body: ''
    });
}