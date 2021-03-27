const Model = require('./model');

function addMessage(message) {
    const Mymessage = new Model(message);
    Mymessage.save();
}

async function getMessage(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser) {
            filter = { user: filterUser };
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populateData) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populateData);
            });
    });
}

async function updateText(id, message) {
    const foundMessage = await Model.findById(id);
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id) { //3
    return Model.deleteOne({
        _id: id
    });
}
module.exports = { //4
    add: addMessage,
    list: getMessage,
    updateText: updateText,
    remove: removeMessage
};