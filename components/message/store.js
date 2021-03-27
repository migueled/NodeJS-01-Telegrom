const Model = require('./model');

function addMessage(message) {
    const Mymessage = new Model(message);
    Mymessage.save();
}

async function getMessage(filterUser) {
    let filter = {};
    if (filterUser) {
        filter = { user: filterUser };
    }
    const messages = await Model.find(filter);
    return messages;
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