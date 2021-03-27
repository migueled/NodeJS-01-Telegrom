const Model = require('./model');

function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

async function getUser(filterUser) {
    let filter = {};
    if (filterUser) {
        filter = { name: filterUser };
    }
    const messages = await Model.find(filter);
    return messages;
}

module.exports = {
    add: addUser,
    list: getUser,
};